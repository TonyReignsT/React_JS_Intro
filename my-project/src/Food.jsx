
function Food(){
    const food1 = "Fries"
    const food2 = "Chicken"

    return (
        <ul>
            <li>Pizza</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food