let count=0;
let profiles = [
  {
    username: "eva",
    gender: "female",
    age: 24,
    birthday: "04 February 1990",
  },
  {
    username: "Mohammad",
    gender: "Male",
    age: 24,
    birthday: "06 May 1990",
  },
  {
    username: "Majd",
    gender: "Female",
    age: 24,
    birthday: "05 May 1998",
  },
  {
    username: "Rawan",
    gender: "Female",
    age: 24,
    birthday: "07 May 1996",
  },
];

let profilesContainer = document.getElementById("birthday__profile-container");
let currentDate = new Date();
let month = currentDate.toLocaleString("default", { month: "long" });
let day = currentDate.getDay();
console.log(day);
console.log(month);
console.log(currentDate);
for (let profile of profiles) {
  let birthday = profile.birthday.split(" ");
  if (birthday[1] === month && birthday[0] == day) {
    count = count + 1;
    //Way 1 : The easy way
    //     profilesContainer.innerHTML += ` <div class="birthday__profile">
    //     <img src="assets/img/female.png" alt="">
    //     <div class="birthday__info">
    //         <p>${profile.username}</p>
    //         <p> ${profile.age}</p>
    //         <p> </p>
    //     </div>
    // </div> `

    // Way 2 : The hard way
    let profileCard = document.createElement("div");
    profileCard.className = "birthday__profile";
    profilesContainer.appendChild(profileCard);
    let profileImg = document.createElement("img");
    profileImg.setAttribute("src", "assets/img/female.png");
    profileCard.appendChild(profileImg);
    let birthdayInfo = document.createElement("div");
    birthdayInfo.className = "birthday__info";
    profileCard.appendChild(birthdayInfo);
    let username = document.createElement("p");
    username.appendChild(document.createTextNode(profile.username));
    birthdayInfo.appendChild(username);

    // console.log(profile)
    if (profile.gender == "Male") {
      profileImg.setAttribute("src", "assets/img/male.png");
    }

    // create count birthday
    // console.log(birthday);
    // let count = 0;
    // let new__Birth = birthday.join();

    // if (profile.birthday ==new__Birth)
    //  {
    //   count += 1;

    // }
    // console.log(count);

    // console.log(new__Birth);

  

    // document.body.appendChild(birthday__Today)
    //calculate the age of the profiles
    let birthdate = new Date(profile.birthday);
    let now = new Date();
    let ageInMilliseconds = now.getTime() - birthdate.getTime();
    let ageInYears = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    let age = document.createElement("p");
    age.appendChild(document.createTextNode(ageInYears));
    birthdayInfo.appendChild(age);

    //action of button clearAll
    function remove(birthday__profile) {
      let clear = document.querySelector(".birthday__profile");
      clear.parentNode.remove();
    }

  }
  
}
let birthday__Today = document.getElementById("counter");
let p = document.createElement("p");
let text__p = document.createTextNode(count + "birthday today");
birthday__Today.appendChild(text__p);