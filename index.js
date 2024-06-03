let conatiner = document.querySelector(".container");
let inputValue = document.querySelector("#inp_value");
let add = document.querySelector("#add");
let balence = document.querySelector("#balence");
let member = document.querySelector("#member");
let increase = document.querySelector("#increase");

add.addEventListener("click", () => {
  deposit();
});

increase.addEventListener("click", () => {

  addition()
});

const deposit = () => {
  const currentBalence = parseInt(balence.innerHTML);
  const addedBalence = parseInt(inputValue.value);
  const regex = /^-?\d+(\.\d+)?$/;

  if (!regex.test(addedBalence)) {
    alert("please enter a amount");
    inputValue.value = "";
  } else {
    const depTwo = () => {
      const totalAmout = currentBalence + addedBalence;
      balence.innerHTML = totalAmout;
    };
    inputValue.value = "";
    return depTwo();
  }
};

const addition = () => {
  let NumMember = parseInt(member.innerHTML)
  let newMember = ++NumMember;
 return member.innerHTML = newMember;
  
};

const fetcher = () => {
  const myPromise = new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data.products;
      })
      .then(products => {
        resolve(products);
      })
      .catch(err => {
        reject(err);
      });
  });
  return myPromise;
};

function display(data) {
  if (data !== null && data !== undefined) {
    let htmlSytnax = ``;
    data.map((item, index) => {
      console.log(item);
      htmlSytnax += `
      <div class="box" key={index}>
        <div class="info">
          <h5> ${item.title} </h5>
        </div>
        <img src=${item.images} />
      </div>
      `;
    });
    conatiner.innerHTML = htmlSytnax;
  }
}

fetcher().then(data => {
  display(data);
});
