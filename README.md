React - library - external requirements - 10+years old

Problem with react - no limitations - architecting the solution/structuring the solution- heavy dependecies on 3rd party library

Lesser the dependecy the better the application

Facility to create components

Virtual dom from react

JS is

-   Weakly typed, Single threaded, multi-threading using async and call backs,
-   Any long running activity cannot be run on singlethread so it has to be asynchronous

Core : code

Dom : ability to change html at runtime

BOM : print, devtools, etc

Evert callback func is js function

Browser have ability to multithread for JS

Stack - single thread

A separate thread is created when a new web api is called which is managed by browser,

Every call back func is just a waiting for their turns to execute on to the stack, they can go to stack when it is empty. Event loop acts as meditator between stack and queue it tells if the stack is free

-   Sync code is always executed first then async
-   Sync  ( run by JS runtime) => Async ( tun by Browser)

If thread is blocked entire solution is blocked ex: page is unresponsive

Dom is also a web api

-   Virtual Dom is an Abstraction layer, a curtain and also it simplifies rendering
-   Virtual DOM on every data change a clone of existing JS dom(3) with uodated(4) dataset was created then a comparision between a clone and JS dom was performed then it identified the diff between 2 DOMS ( 1change as per above case), once Identified only the diff was patched on as result. The major advantage is there was no more rewriting of entire thing.
-   The comparison happens line by line

-   List1: A B C
-   List2: A D B C

-   For more efficient comparison, tracking use keys ( the key prop has to be unique)

-   List1: A: 101 B:102  C:103
-   List2: A:101 D:104 B:102 C:103

-   Irrespective of the item removed the vdom thinks the last  one as removed. So we use key.

Every time we work with list, key has to be used.

-   The most expensive thing of JS is Rendering but not logic, the more re-rending the more time it takes
-   In react rendering was made easy , allows to build components
-   React was never designed to build application they are used to build UI widgets
-   From JS perspective rendering is primary concern and Vdom is resolving this.

File Structure

-   Public folder - to hold local respources, accessible to public, index.html
-   Bundle.js whenever we save everything gets packaged into that
-   SRC entire application code resides, anything outside src doesn't allow code packaging,
-   Flow of execution => Index.html(vdom gets created) -> index.tsx (where Vdom gets executed)
-   Strict mode is development mode in index.tsx
-   App component is first compo that gets loaded, that is supported by app.tsx

Components:

-   Name of file and component should be same
-   One component definition per file
-   Naming convention of the component ( Pascal case)

-   Camel case for predefined pascal for custom component

-   Class based convention and Function based convention

-   Class
-   Function

-   React does not offer anything beyond component

Designing components (Design Principle)

-   Smallest resuable entity
-   We can create our own type.ts if we have more types we can create it at component level or we can create at globally at src
-   Single Responsibility Principle

Design Pattern : Smart-Dumb Component

-   Smart : Logical : containers
-   Dumb : Presentational : components
-   Hierarchy

-   Smart: Parent - takes relevant decision and pass to child

-   Dumb: child - take info from parent no questions asked ( not from where but how)

-   Note 1 smart component can have more than 1 dumb component

Example

-   Product

-   Display the data
-   Fetch the data
-   Add the prod to cart
-   Navigate
-   Wishlist
-   App:

-   ProductList - Smart Component: plist
-   Product - Dumb : data

-   Page 1: add to cart

-   Product -

-   Page 2: add to cart and Navigate

-   Product

-   Page 3: 

-   Product: add to cart or Wishlist

-   Component Communication : Parent <=> child
-   Parent to Child: Props (properties) - right hand side is data
-   Child to Parent: Props (events) - right hand side is event

-   The definition gets passed as a prop
-   <img src="" onclick="function()" />
-   <component prop="data" prop="function()" />

Conditional rendering in React:

-   We have to 2 techniques

-   Ternary Operator

-   EX:

 {data.productStock >0 ? (

                    <button onClick={()=>this.props.btnClick(data.productId)}>Add to Cart</button>

                ): null}

-   When readability is lost we can create another render

-   EX:

renderStock(stock: number, id:number){

 if (stock>0){

 return <button onClick={() => this.props.btnClick(id)}>Add to cart</button>

        }

 return <p>out of stock</p>

    }

-   To pass array of objects we use array.map() to iterate over the list

-   EX:

plist.map((item)=><Product pdata={item}

 btnClick={(id) => console.log(id, ": add item")}/>)

-   Map func allows us to generate the components Dynamically and use
-   Without Key prop the, the VDOM renders multiple times using key prop reduces so much effort or rendering

{

 plist.map((item)=><Product

 key={item.productId}

 pdata={item}

 btnClick={(id) => console.log(id, ": add item")}/>)

 }