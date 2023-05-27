
<div class='mt-5 row'>
    <div class='col-md-3'>
      <div class='card'>
        <div class='card-header'>Filter</div>
        <div class='card-body'>
          <div class='mb-3'>
            <label for='exampleFormControlInput1' class='form-label fw-bold'>Bus
              Operator</label>
            <select class='form-select' aria-label='Default select example' id="filter-bus-operator">
              <option value="" selected>All</option>
            </select>
          </div>
          <div class='mb-3'>
            <label for='exampleFormControlInput1' class='form-label fw-bold'>Types of seat</label>
            <div class='form-check'>
              <input class='form-check-input' type='radio' value='0' name="typeOfSeat" />
              <label class='form-check-label' for='flexCheckDefault'>
                Limousine
              </label>
            </div>
            <div class='form-check'>
              <input class='form-check-input' type='radio' value='1' checked name="typeOfSeat" />
              <label class='form-check-label' for='flexCheckChecked'>
                Normal Seat
              </label>
            </div>        

          </div>
          <div class='d-grid gap-2 col-6 mx-auto'>
            <a id="filter" class='btn btn-primary float-center'>Submit</a>
          </div>
        </div>
      </div>
    </div>
    <div class='col-md-9'>
      <div id="list-of-buses-div">
      </div>

      <div class='d-grid gap-2 col-3 mx-auto'>
        <a class='btn btn-outline-primary float-center' id="load-more">Load more</a>
      </div>
    </div>
  </div>
</main>

{{> footer }}

<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-6' id='exampleModalLabel'>
          <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li class='nav-item' role='presentation'>
              <button class='nav-link active' id='pills-bus-operator-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-operator' type='button' role='tab' aria-controls='pills-bus-operator'
                aria-selected='true'>
                Bus operator
              </button>
            </li>
            <li class='nav-item' role='presentation'>
              <button class='nav-link' id='pills-bus-information-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-information' type='button' role='tab' aria-controls='pills-bus-information'
                aria-selected='false'>
                Bus information
              </button>
            </li>
          </ul>
        </h1>
        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
      <div class='modal-body'>
        <div class='tab-content' id='pills-tabContent'>
          {{!-- <div class='tab-pane fade show active' id='pills-bus-operator' role='tabpanel'
            aria-labelledby='pills-bus-operator-tab' tabindex='0'>
            <div class='p-4 col'>
              <div class='h3 text-center mw-50'>Nhà xe Phương Trang</div>

              <div>
                <img class='img-fluid'
                  src='https://canthoplus.com/wp-content/uploads/2021/12/nha-xe-phuong-trang-mui-ne-phan-thiet-binh-thuan.jpg'
                  alt='Nhà xe' />
              </div>
              <div>
                <span class='fst-italic fw-lighter'> Phone number: </span>
                <span class='fw-bolder'> 0888.888.888 </span>
                <span class='float-end'>
                  <span class='badge rounded-pill bg-warning text-dark'>
                    <i class='bi bi-star-fill'></i>
                    4.1
                  </span>
                </span>
              </div>
              <hr />
              <div class='clearfix'>
                <i class='float-start fs-1 bi bi-person-fill fa-5x me-1'></i>
                <div class='float-start'>
                  <div class='fw-bolder'>Nguyễn Đinh Quang Khánh</div>
                  <div>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                  </div>
                  <p class='fw-light fst-italic'>Xe đi rất high !!!</p>
                </div>
              </div>
              <hr />
              <div class='clearfix'>
                <i class='float-start fs-1 bi bi-person-fill fa-5x me-1'></i>
                <div class='float-start'>
                  <div class='fw-bolder'>Nguyễn Đinh Quang Khánh</div>
                  <div>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                    <i class='text-warning bi bi-star-fill'></i>
                  </div>
                  <p class='fw-light fst-italic'>Xe đi rất high !!!</p>
                </div>
              </div>


              <nav class='mt-5' aria-label='Page navigation example'>
                <ul class='pagination justify-content-center'>
                  <li class='page-item'>
                    <a class='page-link' href='#'>Previous</a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>1</a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>2</a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>3</a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>Next</a>
                  </li>
                </ul>
              </nav>
              <hr />
              <form class='row g-3'>
                <div class='form-floating'>
                  <textarea class='form-control' placeholder='Leave a comment here' id='floatingTextarea2'
                    style='height: 150px; resize: none'></textarea>
                  <label class='text-muted' for='floatingTextarea2'>Your
                    Comments.</label>
                </div>
                <div>
                  <span class='float-start'>
                    <i class='text-warning bi bi-star'></i>
                    <i class='text-warning bi bi-star'></i>
                    <i class='text-warning bi bi-star'></i>
                    <i class='text-warning bi bi-star'></i>
                    <i class='text-warning bi bi-star'></i>
                  </span>
                  <span class='float-end'>
                    <button type='submit' class='btn btn-primary mb-3'>
                      Submit
                    </button>
                  </span>
                </div>

      </div>
      </div>
    </div>
    <div class='col-md-9'>
      <div id="list-of-buses-div">
      </div>

      <div class='d-grid gap-2 col-3 mx-auto'>
        <a class='btn btn-outline-primary float-center' id="load-more">Load more</a>
      </div>
    </div>
  </div>
</main>

{{> footer }}

<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-6' id='exampleModalLabel'>
          <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li class='nav-item' role='presentation'>
              <button class='nav-link active' id='pills-bus-operator-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-operator' type='button' role='tab' aria-controls='pills-bus-operator'
                aria-selected='true'>
                Bus operator
              </button>
            </li>
            <li class='nav-item' role='presentation'>
              <button class='nav-link' id='pills-bus-information-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-information' type='button' role='tab' aria-controls='pills-bus-information'
                aria-selected='false'>
                Bus information
              </button>
            </li>
          </ul>
        </h1>
        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
      <div class='modal-body'>
        <div class='tab-content' id='pills-tabContent'>
          {{!-- <div class='tab-pane fade show active' id='pills-bus-operator' role='tabpanel'
            aria-labelledby='pills-bus-operator-tab' tabindex='0'>
            <div class='p-4 col'>
              <div class='h3 text-center mw-50'>Nhà xe Phương Trang</div>

              <div>
                <img class='img-fluid'
                  src='https://canthoplus.com/wp-content/uploads/2021/12/nha-xe-phuong-trang-mui-ne-phan-thiet-binh-thuan.jpg'
                  alt='Nhà xe' />
              </div>
              <div>
                <span class='fst-italic fw-lighter'> Phone number:       </div>
      </div>
    </div>
    <div class='col-md-9'>
      <div id="list-of-buses-div">
      </div>

      <div class='d-grid gap-2 col-3 mx-auto'>
        <a class='btn btn-outline-primary float-center' id="load-more">Load more</a>
      </div>
    </div>
  </div>
</main>

{{> footer }}

<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-6' id='exampleModalLabel'>
          <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li class='nav-item' role='presentation'>
              <button class='nav-link active' id='pills-bus-operator-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-operator' type='button' role='tab' aria-controls='pills-bus-operator'
                aria-selected='true'>
                Bus operator
              </button>
            </li>
            <li class='nav-item' role='presentation'>
              <button class='nav-link' id='pills-bus-information-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-information' type='button' role='tab' aria-controls='pills-bus-information'
                aria-selected='false'>
                Bus information
              </button>
            </li>
          </ul>
        </h1>
        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
      <div class='modal-body'>
        <div class='tab-content' id='pills-tabContent'>
          {{!-- <div class='tab-pane fade show active' id='pills-bus-operator' role='tabpanel'
            aria-labelledby='pills-bus-operator-tab' tabindex='0'>
            <div class='p-4 col'>
              <div class='h3 text-center mw-50'>Nhà xe Phương Trang</div>

              <div>
                <img class='img-fluid'
                  src='https://canthoplus.com/wp-content/uploads/2021/12/nha-xe-phuong-trang-mui-ne-phan-thiet-binh-thuan.jpg'
                  alt='Nhà xe' />
              </div>
              <div>
                <span class='fst-italic fw-lighter'> Phone number:       </div>
      </div>
    </div>
    <div class='col-md-9'>
      <div id="list-of-buses-div">
      </div>

      <div class='d-grid gap-2 col-3 mx-auto'>
        <a class='btn btn-outline-primary float-center' id="load-more">Load more</a>
      </div>
    </div>
  </div>
</main>

{{> footer }}

<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-6' id='exampleModalLabel'>
          <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li class='nav-item' role='presentation'>
              <button class='nav-link active' id='pills-bus-operator-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-operator' type='button' role='tab' aria-controls='pills-bus-operator'
                aria-selected='true'>
                Bus operator
              </button>
            </li>
            <li class='nav-item' role='presentation'>
              <button class='nav-link' id='pills-bus-information-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-information' type='button' role='tab' aria-controls='pills-bus-information'
                aria-selected='false'>
                Bus information
              </button>
            </li>
          </ul>
        </h1>
        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
      <div class='modal-body'>
        <div class='tab-content' id='pills-tabContent'>
          {{!-- <div class='tab-pane fade show active' id='pills-bus-operator' role='tabpanel'
            aria-labelledby='pills-bus-operator-tab' tabindex='0'>
            <div class='p-4 col'>
              <div class='h3 text-center mw-50'>Nhà xe Phương Trang</div>

              <div>
                <img class='img-fluid'
                  src='https://canthoplus.com/wp-content/uploads/2021/12/nha-xe-phuong-trang-mui-ne-phan-thiet-binh-thuan.jpg'
                  alt='Nhà xe' />
              </div>
              <div>
                <span class='fst-italic fw-lighter'> Phone number:       </div>
      </div>
    </div>
    <div class='col-md-9'>
      <div id="list-of-buses-div">
      </div>

      <div class='d-grid gap-2 col-3 mx-auto'>
        <a class='btn btn-outline-primary float-center' id="load-more">Load more</a>
      </div>
    </div>
  </div>
</main>

{{> footer }}

<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-6' id='exampleModalLabel'>
          <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li class='nav-item' role='presentation'>
              <button class='nav-link active' id='pills-bus-operator-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-operator' type='button' role='tab' aria-controls='pills-bus-operator'
                aria-selected='true'>
                Bus operator
              </button>
            </li>
            <li class='nav-item' role='presentation'>
              <button class='nav-link' id='pills-bus-information-tab' data-bs-toggle='pill'
                data-bs-target='#pills-bus-information' type='button' role='tab' aria-controls='pills-bus-information'
                aria-selected='false'>
                Bus information
              </button>
            </li>
          </ul>
        </h1>
        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
      <div class='modal-body'>
        <div class='tab-content' id='pills-tabContent'>
          {{!-- <div class='tab-pane fade show active' id='pills-bus-operator' role='tabpanel'
            aria-labelledby='pills-bus-operator-tab' tabindex='0'>
            <div class='p-4 col'>
              <div class='h3 text-center mw-50'>Nhà xe Phương Trang</div>

              <div>
                <img class='img-fluid'
                  src='https://canthoplus.com/wp-content/uploads/2021/12/nha-xe-phuong-trang-mui-ne-phan-thiet-binh-thuan.jpg'
                  alt='Nhà xe' />
              </div>
              <div>
                <span class='fst-italic fw-lighter'> Phone number: 
     