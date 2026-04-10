const parent = document.querySelector(`#ul`);

const newadd = document.createElement(`li`)
const newapple= document.querySelector(`#apple`)
newadd.textContent = `장기`;

parent.insertBefore(newadd, newapple);


//-----------------
const color = document.querySelector(`#ul li:last-child`);
color.style.backgroundColor = `#db8080`;

const oddcolor = document.querySelectorAll(`#ul li:nth-child(odd)`)
oddcolor.forEach((item) => {
 item.style.color = `blue`;
});


const evencolor = document.querySelectorAll(`#ul li:nth-child(even)`)
evencolor.forEach((item) => {
 item.style.color = `red`;
});

const hover = document.querySelector(`#ul li:nth-child(3)`);
