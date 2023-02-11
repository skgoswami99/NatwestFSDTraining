package com.stackroute.newz.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.newz.model.UserProfile;
import com.stackroute.newz.repository.UserProfileRepository;
import com.stackroute.newz.util.exception.UserProfileAlreadyExistsException;
import com.stackroute.newz.util.exception.UserProfileNotExistsException;

/*
 * This class is implementing the UserProfileRepository interface. This class has to be annotated with 
 * @Service annotation.
 * @Service - is an annotation that annotates classes at the service layer, thus 
 * clarifying it's role.
 * 
 * */
@Service
@Transactional
public class UserProfileServiceImpl implements UserProfileService {

	/*
	 * Autowiring should be implemented for the UserProfileRepository.
	 */
	@Autowired
	private UserProfileRepository userprofileRepo; 

	/*
	 * Add a new user. Throw UserProfileAlreadyExistsException if the userProfile with specified
	 * userId already exists.
	 */
	public UserProfile registerUser(UserProfile user) throws UserProfileAlreadyExistsException {
		Optional<UserProfile> userById = userprofileRepo.findById(user.getUserId());
		if(userById.isEmpty())
			return userprofileRepo.save(user);
		else
			throw new UserProfileAlreadyExistsException("Can not Register the user. The user with "+user.getUserId() +" already exists in the database.");
	}

	/*
	 * Update an existing userProfile by it's userId. Throw UserProfileNotExistsException 
	 * if the userProfile with specified userId does not exist.
	 */
	public UserProfile updateUserProfile(UserProfile user, String userId) throws UserProfileNotExistsException {
		UserProfile userProfileToUpdate = userprofileRepo.getOne(userId);
		if(userProfileToUpdate == null)
			throw new UserProfileNotExistsException("Can not Update the User Profile. The user with "+userId +" does not exists in the database.");
		else {
			userProfileToUpdate.setContact(user.getContact());
			userProfileToUpdate.setCreateAt(user.getCreateAt());
			userProfileToUpdate.setFirstName(user.getFirstName());
			userProfileToUpdate.setLastName(user.getLastName());
			userProfileToUpdate.setNewsList(user.getNewsList());
			return userprofileRepo.saveAndFlush(userProfileToUpdate);
		}
	}
	
	/*
	 * Delete an existing userProfile by it's userId. Throw UserProfileNotExistsException if 
	 * the userProfile with specified userId does not exist.
	 */
	public void deleteUserProfile(String userId) throws UserProfileNotExistsException {
		UserProfile userProfileToDelete = userprofileRepo.getOne(userId);
		if(userProfileToDelete == null)
			throw new UserProfileNotExistsException("Can not Delete the User Profile. The user with "+userId +" does not exists in the database.");
		else
		userprofileRepo.deleteById(userId);
	}
	
	/*
	 * Retrieve an existing userProfile by it's userId. Throw UserProfileNotExistsException 
	 * if the userProfile with specified userId does not exist.
	 */
	public UserProfile getUserProfile(String userId) throws UserProfileNotExistsException {
		Optional<UserProfile> userProfileById = userprofileRepo.findById(userId);
		if(userProfileById.isEmpty())
			throw new UserProfileNotExistsException("Can not Retreive the User Profile. The user with "+userId +" does not exists in the database.");
		else
		return userProfileById.get();
	}

	/*
	 * Retrieve all existing userProfiles
	 */
	public List<UserProfile> getAllUserProfiles() {
		return userprofileRepo.findAll();
	}

}
