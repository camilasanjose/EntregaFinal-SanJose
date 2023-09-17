import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name";
    }

    if (!phone.trim()) {
      errors.phone = "Phone";
    }

    if (!email.trim() || !email.includes("@")) {
      errors.email = "Valid";
    }

    return errors;
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        name,
        phone,
        email,
      };

      onConfirm(userData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();

    setName("");
    setPhone("");
    setEmail("");
    setErrors({});
  };

  return (
    <form>
      <div className="mb-6 mx-4">
        <label className="ml-2 block mb-2 text-lg font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-6 mx-4">
        <label className="ml-2 block mb-2 text-lg font-medium text-gray-900">
          Phone
        </label>
        <input
          type="tel"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      <div className="mb-6 mx-4">
        <label className="ml-2 block mb-2 text-lg font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <button
        className="ml-3 mb-6 mr-4 rounded-full border border-[#000000] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover: bg-white hover: text-black"
        type="submit"
        onClick={handleConfirm}
      >
        Comprar
      </button>
      <button
        className="ml-3 mb-6 mr-4 rounded-full border border-[#000000] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover: bg-white hover: text-black"
        type="button"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default CheckoutForm;