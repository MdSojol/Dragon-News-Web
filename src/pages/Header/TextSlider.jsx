import "./Animation.css"
const TextSlider = () => {
    return (
        <div>

            <div className='bg-[#F3F3F3]  flex py-2 pl-2 mr-0'>
                <div>
                    <h1 className='bg-[#D72050] py-2 px-3  text-white rounded-sm'>Latest</h1>
                </div>
                <div className='w-full'>
                    <p className="marquee  py-2 ml-0">
                        <span>This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default TextSlider;