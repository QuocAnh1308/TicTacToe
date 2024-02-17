let x = true;
function Insert(id)
{
    Mark(id, x);
    Check();
    x = !x;
}

let table = [];
for(let i = 0; i < 3; i++)
{
    let row = [];
    for(let j = 0; j < 3; j++)
    {
        row.push(0);
    }
    table.push(row);
}
function Mark(id, x)
{
    let m = parseInt(id[3]) - 1, n = parseInt(id[4]) - 1;
    if(table[m][n] == 0)
    {
        if(x == true)
        {
            table[m][n] = 1;
            document.getElementById(id).innerHTML = '<img src="TicTacToeX.png" alt="">';
        }
        else
        {
            table[m][n] = 2;
            document.getElementById(id).innerHTML = '<img src="TicTacToeO.png" alt="">';
        }
    }
}
function Check()
{
    for(let i = 0; i < 3; i++)
    {
        if(table[i][0] == 1 && table[i][1] == 1 && table[i][2] == 1)
        {
            console.log("X Win");
            Appear();
        }
        else if(table[i][0] == 2 && table[i][1] == 2 && table[i][2] == 2)
        {
            console.log("O Win");
            Appear();
        }
        else if(table[0][i] == 1 && table[1][i] == 1 && table[2][i] == 1)
        {
            console.log("X Win");
            Appear();
        }
        else if(table[0][i] == 2 && table[1][i] == 2 && table[2][i] == 2)
        {
            console.log("O Win");
            Appear();
        }
    }
    if(table[0][0] == 1 && table[1][1] == 1 && table[2][2] == 1)
    {
        console.log("X Win");
        Appear();
    }
    else if(table[0][0] == 2 && table[1][1] == 2 && table[2][2] == 2)
    {
        console.log("O Win");
        Appear();
    }
    else if(table[0][2] == 1 && table[1][1] == 1 && table[2][0] == 1)
    {
        console.log("X Win");
        Appear();
    }
    else if(table[0][2] == 2 && table[1][1] == 2 && table[2][0] == 2)
    {
        console.log("O Win");
        Appear();
    }
}
function Appear()
{
    document.getElementById("hidden").style.display = "flex";
    document.getElementById("shadow").style.display = "block";
}
function Disappear()
{
    document.getElementById("hidden").style.display = "none";
    document.getElementById("shadow").style.display = "none";
}
function restart()
{
    for(let i = 1; i <= 3; i++)
    {
        for(let j = 1; j <= 3; j++)
        {
            document.getElementById("but"+i+j).innerHTML = "";
        }
    }
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            table[i][j] = 0;
        }
    }
    
}
function playagain()
{
    restart();
    Disappear();
}
