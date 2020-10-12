package com.hello;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;


public class SalaryCalculator {
	public static void main(String[] args) throws InterruptedException {
    	Scanner input = new Scanner(System.in);
		System.out.println("Program is starting!");
		String career;
		TimeUnit.SECONDS.sleep(3);
		System.out.println("Importing Keyboard...");
		TimeUnit.SECONDS.sleep(2);
		System.out.println("Finished! Opening..");
		TimeUnit.SECONDS.sleep(1);
		System.out.println("What is your career?");
        career = input.next();
		System.out.println("Your career: " + career);
		System.out.println("How much money do you get per hour?");
		double rate = input.nextDouble();
		double weeksperyear = 52.1428571429;
		System.out.println("How many hours do you work per week?");
		double Hoursperweek = input.nextDouble();
		double salary = Hoursperweek * weeksperyear * rate;
		System.out.println("Calculating...");
		TimeUnit.SECONDS.sleep(3);
		int salaryRounded = (int) Math.rint(salary);
		System.out.println("Your job as a " + career + " at the rate of $ " + rate + " is a salary of about $" + salaryRounded + " per year");
	}

}
