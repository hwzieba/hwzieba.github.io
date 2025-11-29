/*Create a grocery list application where users can add and remove items from a list. The list should be displayed as a bulleted unordered list*/
let shoppingList=[];

function printList(){
    document.getElementById("list").innerHTML="<ul>";
    for(i=0;i<shoppingList.length;i++){
        document.getElementById("list").innerHTML+="<li><i  id=\""+i+"\" class=\"bi bi-x-circle-fill remove\" onclick=\"removeFromList(id)\"></i> "+shoppingList[i]+"</li>";
    }
    document.getElementById("list").innerHTML+="</ul>";
}

function addToList(){
    shoppingList.push(prompt("Enter item: "));
    printList();
    console.log(shoppingList);
}

function removeFromList(elementId){
    console.log(elementId)
    shoppingList.splice(elementId,1);
    printList();
}