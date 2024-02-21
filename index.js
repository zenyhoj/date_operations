// Calculate number of hours lapsed based on date and time

// let start = new Date(2024, 2, 7, 10, 41).getTime(); //output is milliseconds
// let end = new Date(2024, 2, 9, 11, 30).getTime();

// let result = (end - start) / 1000 / 3600; //convert the result into seconds(/1000) then hours(/3600)
// result.toFixed(2)
// console.log(`${result.toFixed(2)} hours`);
// Next, get the value from the date input fields;

let btn = document.querySelector(".calculate");
btn.addEventListener("click", function () {
  let dateStart = new Date(document.querySelector("#dateStart").value);

  let dateEnd = new Date(document.querySelector("#dateEnd").value);

  let timeLapsed = (dateEnd.getTime() - dateStart.getTime()) / 1000 / 3600; //result is hours
  // console.log(`${timeLapsed} hrs`);
  let h2 = document.querySelector("h2");

  let existingSpan = document.querySelector("span");
  if (existingSpan) {
    existingSpan.remove();
  }

  let span = document.createElement("span");

  if (timeLapsed < 0) {
    span.style.color = "red";
    span.innerHTML = `You've entered an invalid date values. Start time must not be greater than the End time!.`;
  } else if (!timeLapsed) {
    span.style.color = "red";
    span.innerHTML = `Please provide a value!`;
  } else {
    span.innerHTML = `Elapsed Time: ${timeLapsed.toFixed(2)} hours or ${(
      timeLapsed / 24
    ).toFixed(2)} days`;
  }

  h2.appendChild(span);

  // btn.insertAdjacentElement("afterend", h2);
  // let result = dateEnd.getTime() - dateStart.getTime();
  // let result = (dateEnd - dateStart) / 1000 / 3600;
});
