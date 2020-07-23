// <!-- chapter 52-57 -->
// <!-- assignment 52-57 -->
// <!-- task 1 -->

<div style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
    <h2>images</h2>
    <img onclick="img_click('4.png')" style="cursor: pointer;" id="myImg" src="images/4.png" alt="" width="235px"
        height="250px" />
    <img onclick="img_click('5.jpg')" style="cursor: pointer;" id="myImg2" src="images/5.jpg" alt="" width="235px"
        height="250px" />
    <img onclick="img_click('6.jpg')" style="cursor: pointer;" id="myImg3" src="images/6.jpg" alt="" width="235px"
        height="250px" />
    <img onclick="img_click('7.png')" style="cursor: pointer;" id="myImg4" src="images/7.png" alt="" width="235px"
        height="250px" />

</div>




// <!-- The Modal -->




<div id="myModal" class="modal">
    <span style="cursor: pointer; margin-left: auto;margin-right: auto;" class="close" id="close"
        onclick="span_click()">&times</span>
    <a href="#"><img style="width:700px; display: block; margin-left: auto; margin-right: auto; position: relative;
 top: -300px;" class="modal-content" id="img01"> </a>

    <div id="caption"></div>

    <!-- task  2 -->

    <h1>paragraph</h1>
    <p id="para">With the current coronavirus situation in the world, AlibabaCloud is offering certification courses
        on cloud computing, big data, and security at just USD 0.99 (99% off original price)!
        These courses help you quickly master the fundamentals of cloud technology and reach your potential. Do not
        miss this great opportunity to learn about cloud computing and sharpen your skills while staying at home.
    </p>
    <button
        style="border: 2px solid brown;border-radius: 10px 2px 10px 2px; width: 100px;height: 50px;color: rgb(117, 115, 92);font-size: large;cursor: pointer;"
        onclick="increment()"> Increment</button>
    <button
        style="border: 2px solid brown;border-radius: 10px 2px 10px 2px;width: 100px;height: 50px;color: rgb(117, 115, 92);font-size: large;cursor: pointer;"
        onclick="decrement()">Decremnet</button>
