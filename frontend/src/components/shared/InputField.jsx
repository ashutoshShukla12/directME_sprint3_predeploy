const InputField = ({
    id,
    label,
    type = 'text',
    value,
    onChange,
    required = false,
    disabled = false,
    autoComplete,
}) => (
    <div className="mb-4">
        <label htmlFor={id} className="form-label fw-semibold">
            {label}
            {required && <span className="text-danger"> *</span>}
        </label>
        <input
            type={type}
            className="form-control form-control-lg"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            disabled={disabled}
            autoComplete="off"
            aria-required={required}
        />
    </div>
);

export default InputField;