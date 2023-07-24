
const ResearchPaper = () => {
    return (
        <div className="p-5 bg-slate-100">
            <div className="text-center bg-white p-12">
                <h1 className="text-4xl font-bold ">College Student Researched Article</h1>
                <p className="">based on OECD fields of science and technology</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-around gap-5 my-5">
                <div className=" w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Medical and Health sciences!</h2>
                        <>
                            <li><a href="https://cyberleninka.org/article/c/basic-medicine">Basic medicine</a></li>
                            <li><a href="https://cyberleninka.org/article/c/clinical-medicine">Clinical medicine</a></li>
                            <li><a href="https://cyberleninka.org/article/c/health-sciences">Health sciences</a></li>
                            <li><a href="https://cyberleninka.org/article/c/health-biotechnology">Health biotechnology
                            </a></li>
                        </>
                    </div>
                </div>
                <div className=" w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Agricultural sciences!</h2>
                        <>
                            <li><a href="https://cyberleninka.org/article/c/agriculture-forestry-and-fisheries">Agriculture, forestry, and fisheries</a></li>
                            <li><a href="https://cyberleninka.org/article/c/animal-and-dairy-science">Animal and dairy science</a></li>
                            <li><a href="https://cyberleninka.org/article/c/veterinary-science">Veterinary science</a></li>
                            <li><a href="https://cyberleninka.org/article/c/agricultural-biotechnology"></a>Agricultural biotechnology</li>
                        </>
                    </div>
                </div>
                <div className="w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Humanities!</h2>
                        <div className="">
                            <li><a href="https://cyberleninka.org/article/c/history-and-archaeology">History and archaeology</a></li>
                            <li><a href="https://cyberleninka.org/article/c/languages-and-literature">Languages and literature</a></li>
                            <li><a href="https://cyberleninka.org/article/c/philosophy-ethics-and-religion">Philosophy, ethics and religion</a></li>
                            <li><a href="https://cyberleninka.org/article/c/arts-history-of-arts-performing-arts-music">Arts, history of arts, performing arts, music</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchPaper;