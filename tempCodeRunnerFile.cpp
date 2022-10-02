#include<bits/stdc++.h>
using namespace std;
class Bakery {
    private:
        int quantity;//used for storing quantity of bakery item
        string order_type;//used to store the bakery item
    public:
    Bakery(int quantity,string order_type)
    {//constructor to initialize the bakery item and it's quantity
        this->quantity=quantity;
        this->order_type=order_type;
    }
    string thewholeorder(int ordernumber)
    {//this function will return the whole order like Order 5 Bread 6
        return "Order "+to_string(ordernumber)+" "+this->order_type+" "+to_string(this->quantity);
    }
};
class Dairy {
    private:
        int quantity;//used for storing quantity of dairy item
        string order_type;//used to store the dairy item
    public:
    Dairy(int quantity,string order_type)
    {//constructor to initialize the dairy item and it's quantity
        this->quantity=quantity;
        this->order_type=order_type;
    }
    string thewholeorder(int ordernumber)
    {//this function will return the whole order like Order 2 Milk 5
        return "Order "+to_string(ordernumber)+" "+this->order_type+" "+to_string(this->quantity);
    }
};
class Order {
    private:
        string item;
        int quantity;
        static vector<string> li_dairy;//this will store list of dairy orders after getting processed by Dairy.java
        static vector<string> li_bakery;//this will store list of bakery orders after getting processed by Bakery.java
        string order;
        
    public:
        Order(string items,int quan)
        {//constructor
            item=items;
            quantity=quan;
        }
        void add_dairy_item(string order)
        {//to add dairy item to the array list
            li_dairy.push_back(order);
        }
        void add_bakery_item(string order)
        {//to add bakery item to the array list
            li_bakery.push_back(order);
        }
        void callbakeryordairy(int number,int bake,int dair)
        {
            if(item=="End")
                printing(bake,dair);//this will print according to sample output
            else if(item=="Milk" || item=="Butter")
            {//this creates the object for dairy class where it processes the whole order for a particular dairy item
                Dairy dairy= Dairy(this->quantity,this->item);
                order=dairy.thewholeorder(number);//dairy.placeorder
                add_dairy_item(order);
            }
            else{//this creates the object for bakery class where it processes the whole order for a particular bakery item
                Bakery bakery= Bakery(quantity,item);
                order=bakery.thewholeorder(number);//bakery.placeorder
                add_bakery_item(order);
            }
        }
        void printing(int bakeries,int dairies)
        {
            for(int i=1;i<=bakeries;i++)
            {//this does the printing as given in the question for bakeries
                cout<<"Bakery "<<i<<endl;
                for(int j=i-1;j<li_bakery.size();j+=bakeries)
                {
                    cout<<li_bakery[j]<<endl;
                }
                cout<<endl;//this gives a line gap after each of the bakery
            }
            for(int i=1;i<=dairies;i++)
            {//this does the printing as given in the question for dairies
                cout<<"Dairy "<<i<<endl;
                for(int j=i-1;j<li_dairy.size();j+=dairies)
                {
                    cout<<li_dairy[j]<<endl;
                }
                cout<<endl;//this gives a line gap after each of the dairy
            }
        }
};
class Store {
    int number=1;
    private:
        int bakery;
        int dairy;
    public:
    Store(int noofbakery,int noofdairy)
    {//constrcutor to initialize number of bakery and number of dairy as input by the user
        bakery=noofbakery;
        dairy=noofdairy;
    } 
     void orderprocessing(Order ob)
    {
        ob.callbakeryordairy(number,bakery,dairy);//calls the function in order.java for order processing
         number++;//this maintains the serial number for order
    }
};
// vector<string> Order::li_dairy = {};
// vector<string> Order::li_bakery = {};


int main()
{
    string s;
    int quan;
    int n,m;
    cin>>n;//it takes the number of bakeries as input
    cin>>m;//it takes the number of dairies as input
    Store item=Store(n,m);//creates the object for Store 
    while(true)
    {
        cin>>s;//takes the item as input
        if(s=="End"){
            Order ob=Order(s,-1);//creates the object for class Order when string is "End"
            item.orderprocessing(ob);//this will send the order's object to orderprocessing() method
            break;
        }
        cin>>quan;//takes the quantity as input
        Order ob=Order(s,quan);//creates the object for class Order
        item.orderprocessing(ob);//this will send the order's object to orderprocessing() method
        }
        return 0;
}