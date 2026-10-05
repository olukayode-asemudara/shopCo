const InputField = ({
  label = "Email",
  type = "text",
  placeholder = "bobothefiend.com",
}) => {
  return (
    <div>
      <label
        for="email"
        class="mb-2 text-slate-900 font-medium text-sm inline-block"
      >
        {label}
      </label>
      <input
        type={type}
        id="email"
        name="email"
        placeholder={placeholder}
        required
        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
      />
    </div>
  );
};

export default InputField;
