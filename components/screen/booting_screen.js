import React from 'react'

function BootingScreen(props) {

    return (
        <div style={(props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" })} className={(props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") + " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"}>
  
            <div className="w-100 h-20 flex justify-center items-center rounded-full outline-none cursor-pointer" onClick={props.turnOn} >
                {(props.isShutDown
                    ? <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300"><img width="32px" height="32px" className="w-8" src="./themes/Flat-Remix-Blue-Dark/status/power-button.svg" alt="Power Button" /></div>
                    : <img width="900px" height="400px" src="./themes/Flat-Remix-Blue-Dark/status/kali-preview-boot.gif" alt="Kali Process Symbol" className="bg-gray" />)}
            </div>
            <div className="text-white">
                <a className="underline" href="https://www.linkedin.com/in/ali-abo-alshamlat/" rel="noreferrer noopener" target="_blank">linkedin</a>
                <span className="font-bold mx-1">|</span>
                <a href="https://github.com/Ali-Abo-Alshamlat/ali-abo-alshamlat.github.io" rel="noreferrer noopener" target="_blank" className="underline">github</a>
            </div>
        </div>
    )
}

export default BootingScreen
