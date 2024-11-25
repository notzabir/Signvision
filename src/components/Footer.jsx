

export const Footer = () => {
  return (
    <div className="w-full h-[60px] bg-white pt-20 flex justify-between items-start mx-auto">

        {/* Left section of footer */}
        <div className="pl-20 pb-10">
            <h1 className="text-3xl font-bold" style={{fontFamily: 'sans-serif' }}>Sign Vision</h1>
            <p className="mt-2" style={{fontFamily:'sans-serif'}}>Innovating Sign Language assistance with AI</p>
        </div>

        {/* Right section of footer */}
        <div className="" style={{fontFamily:'sans-serif'}}>
        <div className="pr-20 pb-10">
        <h2 className="text-lg font-semibold">Contact Information</h2>
          <p className="text-sm mt-2">
            Address: 123 AI Street, Tech City, TX<br />
            Instagram: <a href="https://instagram.com/not_zabir/" target="_blank" rel="noreferrer" className="underline text-blue-400">zabircodes</a><br />
            Phone: +1 (469) 268-9863
          </p>
        </div>
        </div>
    </div>
  )
}

export default Footer