import React from 'react';

interface FormProps {
    setKeyword: (key: string) => void;
    keyword: string;
  }

const Form = ({ keyword = '', setKeyword} : FormProps) => {
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //GO
    }

    const handleChange = (e: { target: { value: any; }; }) => {
        const { value: keyword } = e.target;
        setKeyword(keyword)
    }

    return (
        <form onSubmit={handleSubmit} className = 'SearchForm' >
            <input onChange={handleChange} value={keyword} type='text' placeholder='Search a gif here...' />
            <button>Search</button>
        </form>
    )
}

export default Form