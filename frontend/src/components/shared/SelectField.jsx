const SelectField = ({ id, label, value, onChange, options, required, disabled }) => (
    <div className="mb-4">
        <label htmlFor={id} className="form-label fw-semibold">
            {label}
            {required && <span className="text-danger"> *</span>}
        </label>
        <select
            className="form-select"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            disabled={disabled}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default SelectField;