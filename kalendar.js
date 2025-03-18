function submitDate() {
    const datePicker = document.getElementById('date-picker');
    const selectedDate = datePicker.value;
    if (selectedDate) {
      alert(`Rezervirali ste datum: ${selectedDate}`);
    } else {
      alert('Molimo odaberite datum za rezervaciju.');
    }
  }
  