import React from 'react';
import "./style.css";

const Form = () => {
    return (
        <>

            {/**************** Start Header Section *****************/}

            <div className='container-fluid bg-dark'>
                <div className='row'>
                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='form-heading'>
                            <h3 className='text-white text-center p-2'>Land Entry Form</h3>
                        </div>
                    </div>
                </div>
            </div>    {/**************** End Header Section *****************/}




            {/**************** Start DropDown Fields Section *****************/}
            <form>
                <div className='container-fluid py-5 text-style'>
                    <div className='row'>
                        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                            <div className='row'>
                                <div className='col-sm-6 col-md-3'>
                                    <label className='form-label'>Phase: (')</label>
                                    <select id='inputPhase' className='form-select'>
                                        <option selected>Select Phase</option>
                                        <option>Phase 1</option>
                                        <option>Phase 2</option>
                                        <option>....</option>
                                    </select>
                                </div>
                                <div className='col-sm-6 col-md-3'>
                                    <label className='form-label'>Mouza: (')</label>
                                    <select id='inputMouza' className='form-select'>
                                        <option selected>Select Mouza</option>
                                        <option>Mouza 1</option>
                                        <option>Mouza 2</option>
                                        <option>....</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <label className='form-label'>District: (')</label>
                                    <select id='inputDistrict' className='form-select'>
                                        <option selected>Select District</option>
                                        <option>District 1</option>
                                        <option>District 2</option>
                                        <option>....</option>
                                    </select>
                                </div>
                                <div className='col-sm-6 col-md-3'>
                                    <label className='form-label'>Tehsil: (')</label>
                                    <select id='inputTehsil' className='form-select'>
                                        <option selected>Select Tehsil</option>
                                        <option>Tehsil 1</option>
                                        <option>Tehsil 2</option>
                                        <option>....</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-md-4 khasra-number'>
                                <label className='form-label'>Khasra Number: (')</label>
                                <select id='inputKhasra' className='form-select bg-primary text-white'>
                                    <option selected>Select Khasra Number</option>
                                    <option>Khasra Number 1</option>
                                    <option>Khasra Number 2</option>
                                    <option>....</option>
                                </select>
                            </div>

                            <div className='divider'>
                                <hr className='solid'></hr>
                            </div>

                        </div>
                    </div>
                </div>   {/**************** End DropDown Fields *****************/}



                {/**************** Start first half Section of Three Column Form *****************/}


                <div className='container-fluid text-style'>
                    <div className='row'>

                        {/**************** Start Khewat Row *****************/}

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Khewat Number: (')</label>
                            <input type='text' className='form-control' name='khewatnumber' id='khewatnumber' placeholder='Enter Khewat Number' />
                        </div>

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Registary No:</label>
                            <input type='text' className='form-control' name='registaryno' id='registaryno' placeholder='Registary' />
                        </div>

                        <div className='input-group col-sm-6 col-md-4'>
                            <input type='text' className='form-control' placeholder='Mutation Documents Upload' />
                            <button className='btn btn-light' className='input-group-text' id='browse'>Browse</button>
                        </div>

                        {/**************** End Khewat Row *****************/}






                        {/**************** Start Mutation Row *****************/}

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Mutation Number: (')</label>
                            <input type='text' className='form-control' name='mutationnumber' id="mutationnumber" placeholder="Enter Mutation Number" />
                        </div>

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Agreement Number:</label>
                            <input type='text' className='form-control' name='agreementnumber' id="agreementnumber" placeholder="Agreement Number" />
                        </div>

                        <div className='input-group  '>
                            <input type='text' className='form-control' placeholder='CNIC Upload' />
                            <button className='btn btn-light' className='input-group-text' id='browse'>Browse</button>
                        </div>

                        {/**************** End Mutation Row *****************/}






                        {/**************** Start Mutation Available Row *****************/}

                        <div className='col-sm-6 col-md-4'>
                            <label for="input-Mutation-Available" className='form-label'>Mutation Available: (')</label>
                            <select id="inputmutation" className='form-select'>
                                <option selected>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>....</option>
                            </select>
                        </div>

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Total Khasra Area (K, M ,S, Ft): (')</label>
                            <div className="row">
                                <div className='col-3'>
                                    <input type='text' name='khasraarea' className='form-control' id='khasraarea' placeholder='0' />
                                </div>
                                <div className='col-3'>
                                    <input type='text' name='khasraarea' className='form-control' id='khasraarea' placeholder='0' />
                                </div>
                                <div className='col-3'>
                                    <input type='text' name='khasraarea' className='form-control' id='khasraarea' placeholder='0' />
                                </div>
                                <div className='col-3'>
                                    <input type='text' name='khasraarea' className='form-control' id='khasraarea' placeholder='0' />
                                </div>
                            </div>
                        </div>

                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Registry Upload' />
                            <button className='btn btn-light' className='input-group-text' id='browse'>Browse</button>
                        </div>

                        {/**************** End Mutation Available Row *****************/}



                        {/**************** Start Mutation Date Row *****************/}

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Mutation Date: (')</label>
                            <input type='text' name='mutationdata' className='form-control' id='mutationdata' placeholder='DDMMYYYY' />
                        </div>

                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>This Mutation Purchase (K, M ,S, Ft): (')</label>
                            <div className="row">
                                <div className='col-3'>
                                    <input type='text' name='kanalpurchase' className='form-control' id='kanalpurchase' placeholder='kanal' />
                                </div>
                                <div className='col-3'>
                                    <input type='text' name='marlapurchase' className='form-control' id='marlapurchase' placeholder='Marla' />
                                </div>
                                <div className='col-3'>
                                    <input type='text' name='sarsaipurchase' className='form-control' id='sarsaipurchase' placeholder='Sarsai' />
                                </div>
                                <div className='col-3'>
                                    <input type='text' name='mutationpurchase' className='form-control' id='mutationpurchase' placeholder='0' />
                                </div>
                            </div>
                        </div>

                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Agreement Upload' />
                            <button className='btn btn-light' className='input-group-text' id='browse'>Browse</button>
                        </div>

                        {/**************** End Mutation Date Row *****************/}

                    </div>
                </div>   {/**************** End first half Section of Three Column Form *****************/}





                {/**************** start second Section of Three Forms Column *****************/}


                <div className='container-fluid text-style'>
                    <div className="row">
                        <div className='col-sm-6 col-md-4'>
                            <label className='form-label'>Owner Name: (')</label>
                            <input type='text' name='ownername' className='form-control' id='ownername' placeholder="Owner Name" />

                            <label className='form-label'>Wife/Daughter/Son/Divorced/Father: </label>
                            <input type='text' name='name' className='form-control' id='name' placeholder="Enter Name" />

                            <label className='form-label'>Owner CNIC:</label>
                            <input type='text' name='ownercnic' className='form-control' id='ownercnic' placeholder="Enter Owner CNIC" />

                            <label className='form-label'>Contact Number</label>
                            <input type='tel' name='contactnumber' className='form-control' id='contactnumber' placeholder="03xx-xxxxxxx" />
                        </div>

                        <div className='col-sm-6 col-md-4'>
                            <div className='row'>
                                <label className='form-check-label'>Land Catagory:</label>              
                                <div className='col-4 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radiomalkiyat' id='radiomalkiyat' />
                                        <label class='form-check-label'>
                                            Malkiyat
                                        </label>
                                    </div>
                                </div>
                                <div className='col-4 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radioshaamlat' name='radioshaamlat' id='shaamlatradio' />
                                        <label class='form-check-label'>
                                            Shaamlat
                                        </label>
                                    </div>
                                </div>
                                <div className='col-4 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radiohaooq' id='radiohaooq' />
                                        <label class='form-check-label'>
                                            Haqooq
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <label className='form-check-label land-catagory'>Land Catagory:</label>
                                <div className='col-6 col-sm-6 col-md-6 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radiolitigation' id='radiolitigation' />
                                        <label class='form-check-label'>
                                            Litigation
                                        </label>
                                    </div>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radiopossession' id='radiopossession' />
                                        <label class='form-check-label'>
                                            Possesssion
                                        </label>
                                    </div>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radioholdarea' id='radioholdarea' />
                                        <label class='form-check-label'>
                                            Hold Area
                                        </label>
                                    </div>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radioUn-Possesssion' id='radioUn-Possesssion' />
                                        <label class='form-check-label'>
                                            Un-Possesssion
                                        </label>
                                    </div>
                                </div>
                                {/* <div className='col-3 col-sm-6 col-md-6 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radiopossession' id='radiopossession' />
                                        <label class='form-check-label'>
                                            Possesssion
                                        </label>
                                    </div>
                                </div> */}
                                {/* <div className='col-3 col-sm-6 col-md-6 py-3'>
                                    <div class='form-check'>
                                        <input class='form-check-input' type='radio' name='radioUn-Possesssion' id='radioUn-Possesssion' />
                                        <label class='form-check-label'>
                                            Un-Possesssion
                                        </label>
                                    </div>
                                </div> */}
                            </div>


                            <div className='col-sm-12 col-md-12'>
                                <div className="row">
                                    <div className='col-6'>
                                        <label className='form-label'>Land Provider: (')</label>
                                        <select id='inputLandProvider' className='form-select'>
                                            <option selected>Select Land</option>
                                            <option>Land 1</option>
                                            <option>Land 2</option>
                                            <option>....</option>
                                        </select>
                                    </div>

                                    <div className='col-6'>
                                        <label className='form-label'> Other Land Provider:</label>
                                        <input type="text" name='otherlandprovider' className='form-control' id='otherlandprovider' />
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-12'>
                                <label className='form-label'>Pattern of Purchases: (')</label>
                                <div className="row">
                                    <div className='col-12'>
                                        <select id='inputLandProvider' className='form-select'>
                                            <option selected>Select</option>
                                            <option>Pattern 1</option>
                                            <option>Pattern 2</option>
                                            <option>....</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 col-12 col-md-4">
                            <label for="inputAddress" class="form-label">Remarks</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type Message Here" rows="9"></textarea>
                        </div>
                    </div>
                </div>


                {/**************** Submit Button *****************/}

                <div className='mb-5 py-5 text-center'><button type="submit" className='btn btn-dark'>Submit</button></div>
            </form >
        </>
    );
};

export default Form
