import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;
const isTenChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    contact: true,
    city: true,
    pincode: true,
    address: true,
  });

  const nameInputRef = useRef();
  const contactInputRef = useRef();
  const addressInputRef = useRef();
  const pincodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredContact = contactInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPincode = pincodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredContactIsValid = isTenChars(enteredContact);
    const enteredPincodeIsValid = isSixChars(enteredPincode);

    setFormInputValidity({
      name: enteredNameIsValid,
      contact: enteredContactIsValid,
      address: enteredAddressIsValid,
      pincode: enteredPincodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredContactIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPincodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name:enteredName,
      contact:enteredContact,
      address:enteredAddress,
      pincode:enteredPincode,
      city:enteredCity
    })
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.contact ? "" : classes.invalid
        }`}
      >
        <label htmlFor="contact">Contact Number</label>
        <input type="number" id="contact" ref={contactInputRef} />
        {!formInputValidity.contact && (
          <p>Please enter a valid contact number</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.address ? "" : classes.invalid
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>Please enter a valid address</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.pincode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Pincode</label>
        <input type="text" id="postal" ref={pincodeInputRef} />
        {!formInputValidity.pincode && <p>Please enter a valid pincode</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
