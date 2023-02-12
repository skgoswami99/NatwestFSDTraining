package com.stackroute.userprofile.service;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.userprofile.model.UserProfile;
import com.stackroute.userprofile.repository.UserProfileRepository;
import com.stackroute.userprofile.util.exception.UserProfileAlreadyExistsException;
import com.stackroute.userprofile.util.exception.UserProfileNotFoundException;

/*
* Service classes are used here to implement additional business logic/validation 
* This class has to be annotated with @Service annotation.
* @Service - It is a specialization of the component annotation. It doesn't currently 
* provide any additional behavior over the @Component annotation, but it's a good idea 
* to use @Service over @Component in service-layer classes because it specifies intent 
* better. Additionally, tool support and additional behavior might rely on it in the 
* future.
* */
@Service
public class UserProfileServiceImpl implements UserProfileService {

	/*
	 * Autowiring should be implemented for the UserProfileRepository. (Use
	 * Constructor-based autowiring) Please note that we should not create any
	 * object using the new keyword.
	 */
	private UserProfileRepository userProfileRepository;

	@Autowired
	public UserProfileServiceImpl(UserProfileRepository userProfileRepository) {
		this.userProfileRepository = userProfileRepository;
	}

	/*
	 * This method should be used to save a new userprofile.Call the corresponding
	 * method of Respository interface.
	 */

	public UserProfile registerUser(UserProfile user) throws UserProfileAlreadyExistsException {
		Optional<UserProfile> userProfileObj = userProfileRepository.findById(user.getUserId());
		if (userProfileObj.isPresent()) {
			throw new UserProfileAlreadyExistsException("Exception Occurred in registerUser");
		} else {
			UserProfile uPro =  userProfileRepository.insert(user);
			if(uPro==null) {
				throw new UserProfileAlreadyExistsException("Exception Occurred in registerUser");
			}
			return uPro;
		}
	}

	/*
	 * This method should be used to update a existing userprofile.Call the
	 * corresponding method of Respository interface.
	 */

	@Override
	public UserProfile updateUser(String userId, UserProfile user) throws UserProfileNotFoundException {
		try {
			UserProfile userProfileObj = userProfileRepository.findById(userId).get();
			if (userProfileObj != null) {
				return userProfileRepository.save(user);
			} else {
				throw new UserProfileNotFoundException("Exception Occurred updateUser");
			}
			//return userProfileObj;
		} catch (NoSuchElementException e) {
			throw new UserProfileNotFoundException("Exception Occurred updateUser");
		}

	}

	/*
	 * This method should be used to delete an existing user. Call the corresponding
	 * method of Respository interface.
	 */

	@Override
	public boolean deleteUser(String userId) throws UserProfileNotFoundException {
		try {
			UserProfile userProfileObj = userProfileRepository.findById(userId).get();
			if (userProfileObj != null) {
				userProfileRepository.delete(userProfileObj);
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			throw new UserProfileNotFoundException("Exception Occurred deleteUser");
		}

	}

	/*
	 * This method should be used to get userprofile by userId.Call the
	 * corresponding method of Respository interface.
	 */

	@Override
	public UserProfile getUserById(String userId) throws UserProfileNotFoundException {
		try {
			if (userProfileRepository.findById(userId).isPresent()) {
				return userProfileRepository.findById(userId).get();
			} else {
				throw new UserProfileNotFoundException("Exception Occurred in getUserById");
			}
		} catch (NoSuchElementException e) {
			throw new UserProfileNotFoundException("Exception Occurred in getUserById");
		}

	}
}
