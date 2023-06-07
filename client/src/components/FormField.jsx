import React from 'react';

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label htmlFor={name} className="block text-sm font-medium text-gray">
                    {LabelName}
                </label>
                {isSurpriseMe && (
                    <button
                        className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
                        type="button"
                        onClick={handleSurpriseMe}
                    >
                        Surprise me
                    </button>
                )}
            </div>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-ls focus:ring-[#4649ff] focus:border-[#4649ff] block w-full p-3 outline-none"
            ></input>
        </div>
    );
};

export default FormField;
