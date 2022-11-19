import java.util.*;
import java.util.ArrayList;

public class Main
{
    /**
     * This is the main method for this program.  It prompts the user and
     * then prints the fortune.
     */
    public static void main(String[] args)
    {
        List<String> gameList = new ArrayList<>();
        List<Integer> gameInt = new ArrayList<>();


        // define the keyboard object
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Hello there, welcome to your virtual fortune teller- \nBefore we begin, what is your name? ");
        String name = keyboard.nextLine();
        gameList.add(name);
        System.out.print("Hi " + gameList.get(0) + "! ");

        // Uses Scanner to get user's age input, then saves that input into an integer variable
        System.out.println("Lets begin on getting your fortune. I just have a few quick questions. ");
        System.out.print("How old are you? ");
        int age =  keyboard.nextInt();


        while (age > 100)
        {
            System.out.print("Yeah right! How old are you seriously? ");
            age =  keyboard.nextInt();
            gameInt.add(age);
        }
        while (age < 0)
        {
            System.out.print("Funny joke, now what is your real age? ");
            age =  keyboard.nextInt();
            gameInt.add(age);
        }
        gameInt.add(age);
        System.out.println("Perfect! You are a youthful " + gameInt.get(0) + " years old. ");

        System.out.println("We are so close to getting you your fortune...");
        System.out.print("How many jobs have you had? ");
        int job =  keyboard.nextInt();

        while (job <= 0)
        {
            System.out.println("No job? Either you're really lucky, or you're lying to me! ");
            System.out.print("How about you tell me how old you were when you when on your first vacation.");
            job = keyboard.nextInt();
            gameInt.add(job);
        }
        while (job > 50)
        {
            System.out.println("Do you change jobs every single day or what!?");
            System.out.print("How about you tell me how old you were when you got your first job. ");
            job = keyboard.nextInt();
            gameInt.add(job);
        }
        gameInt.add(job);
        System.out.println("Perfect!");


        System.out.print("Lets dive into something more exciting. What is your favorite game? ");
        keyboard.nextLine();
        String favGames = keyboard.nextLine();
        gameList.add(favGames);
        System.out.print("No way! I love playing " + gameList.get(1));


        System.out.print(". Now just out of curiosity, how old is your oldest living relative? ");
        Integer relAge = keyboard.nextInt();
        gameInt.add(relAge);
        System.out.print("Wow, that is really amazing that they are " + gameInt.get(2) + " years old. ");


        System.out.print("How many video games do you play? ");
        int gamer = keyboard.nextInt();


        while (gamer < 0)
        {
            System.out.println("You play a negative amount of games!? Teach me your ways!");
            System.out.println("All jokes aside now. Remember I charge hourly.... now tell me the truth.");
            gamer = keyboard.nextInt();
            gameInt.add(gamer);
        }
        while (gamer >= 100)
        {
            System.out.println("Now, I like to play games just as much as the other guys,");
            System.out.print("but come on now.. let's be honest. ");
            gamer = keyboard.nextInt();
            gameInt.add(gamer);
        }

        if (gamer >= 1)
        {
            System.out.println("Nice! I should get into playing more video games. ");
        }
        else if (gamer == 0)
        {
            System.out.println("Look at you go! Not wasting your time on video games! ");
        }
        gameInt.add(gamer);

        System.out.print("Now.. totally not asking because I want to scam you... but how much money do you make in a year? ");
        Integer monies = keyboard.nextInt();

        while (monies < 0)
        {
            System.out.println("Then how are you going to pay me for this session? ");
            System.out.println("Now seriously.. how much are you making? ");
            monies = keyboard.nextInt();
            gameInt.add(monies);
        }
        gameInt.add(monies);
        System.out.print("Wow! $" + gameInt.get(4) + " Glad to know you can pay me when were done here");


        System.out.print("Were almost done here I swear. Now what is your dream job? ");
        keyboard.nextLine();
        String career = keyboard.nextLine();
        gameList.add(career);
        System.out.print("Wow! " + gameList.get(2) + " would be a fun job! ");


        System.out.println("I've got exciting news, I have got your lucky number!");
        int luckynum;
        luckynum = (int)(gameInt.get(0) + age + gameInt.get(2) / 2);
        int finalnum = Math.abs(luckynum);
        System.out.println("and your lucky number is...");
        System.out.println("...");
        System.out.println("...");
        System.out.print(finalnum);
        System.out.println("!");


        System.out.print("I've got enough information to tell you your fortune as well, " + name + "! ");

        System.out.print("Your fortune: as a " + age + " year old...");
        System.out.println("\n you will go through your years in the future wandering, learning and growing.");
        System.out.println("You will always strive to better yourself and those around you,");
        System.out.print("while taking the time occasionally for yourself to play " + gameList.get(1) + ", ");
        System.out.println("which you'll always have a special place in your heart for.");

        System.out.print("With a successful career in " + gameList.get(2));
        System.out.println(" you will be famous for your contributions to society,");

        System.out.println("This has been so much fun!");
        System.out.print("Thank you so much for letting me read you your fortune, " + name + "! ");
        System.out.println("Hope you have a good day!");

    }
}
