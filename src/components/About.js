// import React, {useState} from 'react'
export default function About(props) {
    
    let myStyle = {
        color: props.mode === "dark"? "#F5F5F5":"black",
        backgroundColor: props.mode === "dark"? "#181818":"white"
    }    

    return (
    <div className='container' style={{color: props.mode === "dark"? "#F5F5F5":"black"}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>What We Offer</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    At TextUtils, we provide powerful and user-friendly utilities, including:
                    <ul>
                        <li><strong>Convert to Upper Case: </strong>Transform your text to uppercase effortlessly.</li>
                        <li><strong>Convert to Lower Case: </strong>Easily switch your text to lowercase.</li>
                        <li><strong>Clear Text: </strong>Reset the text area with a single click.</li>
                        <li><strong>Copy Text: </strong>Quickly copy your text to the clipboard.</li>
                        <li><strong>Remove Extra Spaces: </strong> Eliminate unnecessary spaces for clean and professional-looking text.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Why Choose TextUtils?</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <ul>
                        <li><strong>Simple and Intuitive: </strong>A clean interface that anyone can use.</li>
                        <li><strong>Fast and Reliable: </strong>Designed for speed and accuracy.</li>
                        <li><strong>Browser Compatible: </strong>Works seamlessly on all modern web browsers without the need for additional installations.</li>
                        <li><strong>100% Free: </strong>No hidden charges or subscriptions—just text tools for everyone!</li>
                        <li><strong>Modern Design: </strong>Built using cutting-edge web technologies like ReactJS, ensuring a smooth user experience.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Our Goal</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Our mission is to provide a lightweight and accessible tool for text processing tasks. We believe in saving time and improving productivity for everyone, from students to developers and beyond. Thank you for choosing <strong>TextUtils</strong> - we're here to help you handle your text with ease!
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
