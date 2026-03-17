function bookTicket() {
  let moviePrice = document.getElementById("movie").value;
  let seats = document.getElementById("seats").value;

  if (seats === "" || seats <= 0) {
    document.getElementById("result").innerText = "❌ Enter valid seats";
    return;
  }

  let total = moviePrice * seats;

  document.getElementById("result").innerText =
    "✅ Booking Successful! Total Price: ₹" + total;
}
