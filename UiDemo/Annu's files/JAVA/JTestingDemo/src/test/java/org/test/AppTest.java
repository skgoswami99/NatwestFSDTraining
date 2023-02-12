package org.test;


import org.junit.jupiter.api.*;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    @BeforeAll
    static void setup()
    {
        System.out.println("Before All Executed");
    }

    @BeforeEach
    void setupThis()
    {
        System.out.println("Before Each Executed");
    }


    @Test
    void testAdd()
    {
        System.out.println("Testing Add Method");
        Assertions.assertEquals(4,Calculator.add(2,2));
    }

    @Test
    void testSub()
    {
        System.out.println("Testing Sub Method");
        Assertions.assertEquals(0,Calculator.sub(2,2));
    }


    @AfterAll
    static void tear()
    {
        System.out.println("After All Executed");
    }

    @AfterEach
    void teardownThis()
    {
        System.out.println("After Each Executed");
    }
}