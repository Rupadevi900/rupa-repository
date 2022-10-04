using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConApp1
{
    internal class Class2
    {
        public void show()   //instance method
        {
            Console.WriteLine("this is show method");
        }
        public static void display() //static
        {
            Console.WriteLine("this is display method");
        }
        static void Main(string[] args)
        {
            display(); //invoking display
            Class2 class2 = new Class2(); //invoking show
            class2.show();
        }
    }
}
