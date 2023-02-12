package com.java.eight.rfi;


@FunctionalInterface
public interface Function<T,R> {

	R apply(T t);
}
