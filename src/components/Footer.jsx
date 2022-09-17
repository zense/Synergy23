import "./Footer.scss";
const Footer = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm">
                    <div className="footer-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas velit, quod in repudiandae incidunt et dicta! Libero ipsum earum nisi beatae soluta sequi expedita atque! Voluptate, numquam impedit! Temporibus mollitia sequi voluptas quaerat, in commodi repellendus suscipit culpa? Quod quo modi iste laborum ipsum consectetur numquam quisquam dolores aspernatur rerum asperiores debitis ratione nam, odio rem amet, maiores, est quis itaque cumque quaerat culpa praesentium corporis architecto. Sit dolore quas laboriosam. In, laborum ad. Deserunt beatae aut quos eaque, quaerat quam consectetur facilis veniam molestiae ullam recusandae dolores, sint officiis inventore sequi earum quidem a. Quia dolor a omnis!
                        <div className="row">
                            <div className="col-sm">
                                <h1>Logo</h1>
                            </div>
                            <div className="col-sm">
                                <h1>IIITB- logo</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ! mobile content not shown in mobile view */}
                <div className="col-sm mobile">
                    <div className="footer-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas velit, quod in repudiandae incidunt et dicta! Libero ipsum earum nisi beatae soluta sequi expedita atque! Voluptate, numquam impedit! Temporibus mollitia sequi voluptas quaerat, in commodi repellendus suscipit culpa? Quod quo modi iste laborum ipsum consectetur numquam quisquam dolores aspernatur rerum asperiores debitis ratione nam, odio rem amet, maiores, est quis itaque cumque quaerat culpa praesentium corporis architecto. Sit dolore quas laboriosam. In, laborum ad. Deserunt beatae aut quos eaque, quaerat quam consectetur facilis veniam molestiae ullam recusandae dolores, sint officiis inventore sequi earum quidem a. Quia dolor a omnis!
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;