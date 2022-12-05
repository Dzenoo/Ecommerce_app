import { useRef, useState } from "react";

import classes from "./CheckoutForm.module.css";

const isEmpty = (value) => value.trim() === "";

const CheckoutForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    FirstName: true,
    LastName: true,
    Address: true,
    City: true,
    Country: true,
    PostalCode: true,
    Phone: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const postalInputRef = useRef();
  const phoneInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCountryIsValid = !isEmpty(enteredCountry);
    const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);

    setFormInputsValidity({
      FirstName: enteredFirstNameIsValid,
      LastName: enteredLastNameIsValid,
      Address: enteredAddressIsValid,
      City: enteredCityIsValid,
      Country: enteredCountryIsValid,
      PostalCode: enteredPostalCodeIsValid,
      Phone: enteredPhoneIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredCountryIsValid &&
      enteredPostalCodeIsValid &&
      enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      FirstName: enteredFirstName,
      LastName: enteredLastName,
      Address: enteredAddress,
      City: enteredCity,
      Country: enteredCountry,
      PostalCode: enteredPostalCode,
      Phone: enteredPhone,
    });
  };

  const FirstNameControlClasses = `${classes.control} ${
    formInputsValidity.FirstName ? "" : classes.invalid
  }`;

  const LastNameControlClasses = `${classes.control} ${
    formInputsValidity.LastName ? "" : classes.invalid
  }`;

  const AddressControlClasses = `${classes.control} ${
    formInputsValidity.Address ? "" : classes.invalid
  }`;

  const CityControlClasses = `${classes.control} ${
    formInputsValidity.City ? "" : classes.invalid
  }`;

  const CountryControlClasses = `${classes.control} ${
    formInputsValidity.Country ? "" : classes.invalid
  }`;

  const PostalControlClasses = `${classes.control} ${
    formInputsValidity.PostalCode ? "" : classes.invalid
  }`;

  const PhoneControlClasses = `${classes.control} ${
    formInputsValidity.Phone ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div style={{ display: "flex", gap: "12px" }}>
        <div className={FirstNameControlClasses}>
          <input type="text" placeholder="First Name" ref={firstNameInputRef} />
          {!formInputsValidity.FirstName && (
            <p>Please enter a valid first name</p>
          )}
        </div>

        <div className={LastNameControlClasses}>
          <input type="text" placeholder="Last Name" ref={lastNameInputRef} />
          {!formInputsValidity.LastName && (
            <p>Please enter a valid Last Name</p>
          )}
        </div>
      </div>

      <div className={AddressControlClasses}>
        <input type="text" placeholder="Address" ref={addressInputRef} />
        {!formInputsValidity.Address && <p>Please enter a valid address</p>}
      </div>

      <div className={CityControlClasses}>
        <input type="text" placeholder="City" ref={cityInputRef} />
        {!formInputsValidity.City && <p>Please enter a valid City</p>}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <div className={CountryControlClasses}>
          <input type="text" placeholder="Country" ref={countryInputRef} />
          {!formInputsValidity.Country && <p>Please enter a valid Country</p>}
        </div>

        <div className={PostalControlClasses}>
          <input type="text" placeholder="Postal Code" ref={postalInputRef} />
          {!formInputsValidity.PostalCode && (
            <p>Please enter a valid postal code</p>
          )}
        </div>
      </div>

      <div className={PhoneControlClasses}>
        <input type="text" placeholder="Phone" ref={phoneInputRef} />
        {!formInputsValidity.Phone && <p>Please enter a valid Phone</p>}
      </div>

      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
