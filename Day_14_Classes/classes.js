/****Day-14 (Classes!)*****/

//Activity 1: Class Definition✅
//Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    greeting(){
        console.log(`hey! ${this.name} welcome to our webpage as your age is ${this.age} you can eligible to access our website!`);
    }

    updateage(){
        this.age = this.age+10;
        console.log(`Your updated age is ${this.age}`);
    }
}

const  p1 = new Person("Shubh",20);
p1.greeting()

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.
p1.updateage()

//Activity 2: Class Inheritance✅

//Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class student extends Person{
    constructor(name,age,studentID){
        super(name,age);
        this.studentID = studentID;
    }
    
    getStudID(studentID){
        console.log(`Your studentID is ${this.studentID}`);
    }
    greeting(){
    console.log(`hey ! ${this.name} your age is ${this.age} and your id is ${this.  studentID}`);
}
}

const stud1 = new student("shubh",24,"007");
stud1.getStudID();

//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

//student can excess all the properties of person!
const s2 = new student("Swayam",14,"56SCD");
s2.greeting();
s2.updateage();//it is not defined in the student class but it is in the person class so we can excess it from the person.


//Activity 3: Static Methods and Properties
//Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreeting(){
        console.log('Hello i am in person class!');
    }
    
}
Person.genericGreeting();

//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class student extends Person{
    static student_count = 0;
    constructor(name,age,studentID){
        super(name,age);
        this.studentID = studentID;
        student.student_count++;
        console.log(`Number of students = ${student.student_count}`);
    }
    
}

const s3 = new student("shubh",10,"hufae");
const s4 = new student("shubh",10,"hufae");
const s5 = new student("shubh",10,"hufae");

//Activity 4: Getters and Setters

//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
  }
  
  const p3 = new Person("shubh", "Ujala", 20);
  
  //Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  p3.fullName = "kishan gupta"
  console.log(p3.fullName);

//Activity 5: Private Fields (Optional)

//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account{
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
          this.#balance += amount;
          console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        }
      }
    
      withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
          this.#balance -= amount;
          console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
          console.log("Insufficient funds or invalid amount.");
        }
      }
    
      getBalance() {
        return this.#balance;
      }
}
    
const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(300);
console.log(`Final balance: $${account1.getBalance()}`);




//Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Account {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit: $${amount}`);
        this.logBalance();
      } else {
        console.log("Deposit amount must be positive");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw: $${amount}`);
        this.logBalance();
      } else {
        console.log("Invalid withdraw amount");
      }
    }
  
    logBalance() {
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Create an instance of the Account class
  let myAccount = new Account("shubh ujala", 1000);
  
  // Test the deposit method
  myAccount.deposit(200);
  
  // Test the withdraw method
  myAccount.withdraw(-400);
  
  // Test deposit with a negative amount
  myAccount.deposit(-500);
  
  // Test withdraw with an amount greater than the balance
  myAccount.withdraw(1000);
  
  // Test withdraw with a negative amount
  myAccount.withdraw(-500);
  