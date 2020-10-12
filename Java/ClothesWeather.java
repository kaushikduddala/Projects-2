package com.hello;
import KeyboardPackage.Keyboard;
import java.util.Scanner;

public class Weather {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		// This program will give suggestions of what to wear based on the weather (temp and sun condition)
		System.out.println("Please input the temp.");
		int temp = input.nextInt();
        System.out.println("How is the sun today? 1 = Sunny, 2 = Cloudy");
        int Sun = input.nextInt();
		if (temp > 80) {
			System.out.println("Its pleasent outside today, wear shorts and a t-shirt.");
			if (Sun == 1) {
				System.out.println("Maybe a cap to block the sun from your eyes aswell."); }
				else if (Sun == 2) {
					System.out.println("No need for a cap since there is no sun to bother you."); 
			}
		}
		else if (temp > 65) {
			System.out.println("It's a little cooler, Perhaps wear a long sleeve shirt and jeans");		
		}	
		else {
			System.out.println("Its cold today, Maybe wear some winter pants and a jacket");
		}
	}
}
