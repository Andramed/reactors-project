export const Language = () => {
    return (
        <div className=" flex gap-1  text-white"> 
            <h1 className=" text-white">EN</h1>
            <select className="  bg-header-bg" value="language"> 
                <option value="language"></option>
                <option value="en">English</option>
                <option value="ro">Română</option>
                <option value="ru">Русский</option>
            </select>
        </div>
    )
}
export default Language;