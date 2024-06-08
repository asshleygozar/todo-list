package Todolist_Commandline;
import java.util.Scanner;


class Main{
     
    private static void viewLists(){

         for(String all: Lists.todo){

            System.out.println("> " + all);
         }
      }

   
     private static void addLists(Scanner scanner){

        boolean choice = true;

        do{
 
         System.out.print("> ");
         String list = scanner.nextLine();
 
         Lists.todo.add(list);
 
           if(list.equals("exit")){
 
              choice = false;
           
              }else if(list.equals("go")){
                 
                
                   viewLists();
                   break;
              
                 } else {
             
              choice = true;
 
                   }
 
        }while(choice == true);
      }

      private static void removeLists(Scanner scanenr){


      }

      private static void choiceLists(Scanner scanner){

        try {
        
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
     
            switch(choice){
     
             case 1 -> addLists(scanner);
     
             case 2 -> removeLists(scanner);
     
             case 3 -> viewLists();
          
     
                }
          } catch (java.util.InputMismatchException e) {
       
                  System.out.println("Integers Number Only!!");      
                   
                   
    
                    }
           
     

      }
    public static void main(String[]args){
   
       Scanner scanner = new Scanner(System.in);

       System.out.println("Welcome Aboard to your Todolist Center!");

       System.out.println("Choose your action:");

       System.out.println("1. Add Lists");
       System.out.println("2. Remove Lists");
       System.out.println("3. View Lists");

       choiceLists(scanner);
    

       scanner.close();
    }


}