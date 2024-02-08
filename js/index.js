function enterInformation() {
  try {
    let age = +prompt("Yoshingini kiritin?");
    if (!age || age >= 1000) {
      age = +prompt("Yoshingizda hatolik bor boshidan kiriting! Misol uchun : 19 ❗️");
    }
  } catch (error) {
    age = +prompt(`Yoshingizda hatolik bor boshidan kiriting`);
  }
  try {
    let telephoneTest = /^\+\d{12}$/;
    let telephoneNumber = +prompt("Telefonizi raqamizi kiriting?");
    if (telephoneTest.test(telephoneNumber)) {
      console.log(true);
    } else {
      telephoneNumber = +prompt(
        "Telefonizi raqamingizda hatolik bor boshidan kiriting! Misol uchun :+998930094579 ❗️"
      );
    }
  } catch (error) {}
  try {
    let emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = prompt("Email kiriring?");
    if (!emailTest.test(email)) {
      email = prompt("Emaililizda hatolik bor boshidan kiriting! Misol uchun : abduvasiyevmuhammadyusuf@gmail.com ❗️");
    }
  } catch (error) {}
  return false;
}

enterInformation();
