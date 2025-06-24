import SectionHeader from "./SectionHeader";

export default function ImgProjects() {
    return (
        <>



            <div className="container">

                <div className="row">
                    {Array.from({ length: 20 }, (_, i) => (
                        <div className="col-lg-6 my-3" key={i}>
                            <img
                                src={`/images/projects/${i + 1}.png.webp`}
                                alt={`Project ${i + 1}`}
                                className="img-fluid"
                            />
                        </div>
                    ))}
                </div>

            </div>




        </>
    );
}