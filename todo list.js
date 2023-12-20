let input=prompt('What would you like to do?');
const todo=['Curtain','Tax','Skull'];
while (input !== 'quit' && input !== 'q'){
    if (input === 'todo'){
        console.log('********')
        for(let i =0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('********');
    }else if(input ==='new'){
        const newTodo = prompt('Name of new todo?');
        todo.push(newTodo);
        console.log(`${newTodo} added to list`);
    }else if(input ==='delete'){
        // Takes string number and parses it as a number.
        const index = parseInt (prompt('Enter index to delete a todo'));
        // If index is NaN it will print "Unknown index"
        if(!Number.isNaN(index)) {
        // stores deleted element in an array
            const deleted = todo.splice(index,1);
            console.log(`Deleted ${deleted[0]}`);
        }else{
            console.log('Unknown index')
        }
    }
    input=prompt('What would you like to do?');
}
console.log('You have quitted')