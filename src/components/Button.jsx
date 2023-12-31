
const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat bg-coral-red text-lg text-white leading-none border-coral-red">
      
      { label }

      <img src={iconURL} alt="arrow right icon" 
      className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button
