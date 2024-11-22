$(document).ready(function() {
    setupPage({"hw_number": 7, "hw_title": "Object Model and Miscellaneous jQuery"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
             <section class="hw7-section">
                <h3>Change Styles</h3>
                <form>
                    <fieldset>
                        <legend>Select a Background Color:</legend>
                        <div>
                            <input type="radio" id="red" name="background-color" value="#800000">
                            <label for="red">Red</label>
                        </div>
                        <div>
                            <input type="radio" id="blue" name="background-color" value="#000080">
                            <label for="blue">Blue</label>
                        </div>
                        <div>
                            <input type="radio" id="dark-gray" name="background-color" value="#222">
                            <label for="dark-gray">Dark Gray</label>
                        </div>
                    </fieldset>
                    <br>
                    <fieldset>
                        <legend>Select Font Styles:</legend>
                        <div>
                            <input type="checkbox" id="bold" name="font-style" value="bold">
                            <label for="bold">Bold</label>
                        </div>
                        <div>
                            <input type="checkbox" id="italic" name="font-style" value="italic">
                            <label for="italic">Italic</label>
                        </div>
                        <div>
                            <input type="checkbox" id="underline" name="font-style" value="underline">
                            <label for="underline">Underline</label>
                        </div>
                    </fieldset>
                    <br>
                    <table>
                        <tr>
                            <td>
                                <label for="font-size">Select a Font Size:</label>
                            </td>
                            <td>
                                <select name="font-size" class="full-width-black-background thin-white-border" id="font-size">
                                    <option value="">-- Select Font Size --</option>
                                    <option value="1em">Small</option>
                                    <option value="2em">Medium</option>
                                    <option value="3em">Large</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </form>
            </section>
            <section class="hw7-section" id="paragraph-section">
                <h3>Change Me</h3>
                <p>
                The sun dipped below the horizon, casting long shadows across the quiet town. Streets, usually buzzing with activity, were now empty, save for a lone streetlamp flickering in the distance. The air, cool and crisp with the onset of evening, carried the scent of damp earth and pine trees. It was the kind of night where everything seemed suspended in time, like the world was holding its breath, waiting for something—anything—to break the stillness. Yet, in the distance, the faint hum of an approaching car reminded the town that life continued, just beyond the threshold of silence.
                </p>
                <p>
                Inside the small bookstore, the smell of old paper and fresh coffee mingled in the air. Shelves, lined with every genre imaginable, seemed to stretch on forever, their wooden spines creaking gently with the weight of knowledge. A few scattered customers wandered between the aisles, lost in their own worlds, their footsteps soft on the worn hardwood floors. In the back corner, a cat stretched lazily in a sunbeam, its tail flicking as it watched the occasional movement of the customers. There was a comforting hum in the store, the sound of soft conversations and pages turning, a reminder that in places like this, time seemed to move a little slower.
                </p>
                <p>
                High on the hill, the old mansion stood, its crumbling stone walls shrouded in mist. Ivy twisted up the sides, almost as if nature itself was trying to reclaim the forgotten place. The windows, once proud and gleaming, were now dark, their glass shattered in places. The front door, ajar, creaked on its hinges whenever the wind passed through. Locals whispered stories of strange happenings in the mansion—of flickering lights at odd hours, of voices carried on the wind—but no one had ventured inside for years. Still, the house loomed, a reminder of a time long gone, waiting for someone brave enough to uncover its secrets.
                </p>
            </section>
        `;
    }

    $("#menu-bar").click(function() {
        $(".vertical-nav-bar").toggle();
    });

    const currentPath = window.location.pathname;
    const parts = currentPath.split('/');
    const currentPage = parts[parts.length - 1];
    // Iterate over each <a> tag 
    $("nav").children('a').each(function () {
        // Check if the href attribute matches the current path
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('nav-active'); // Add the 'active' class
        }
    });

    $("#red").change(function() {
        if ($("#red").is(":checked")) {
            const color = $("#red").val();
            $("#paragraph-section").css("background-color", color);
        }
    });

    $("#blue").change(function() {
        if ($("#blue").is(":checked")) {
            const color = $("#blue").val();
            $("#paragraph-section").css("background-color", color);
        }
    });

    $("#dark-gray").change(function() {
        if ($("#dark-gray").is(":checked")) {
            const color = $("#dark-gray").val();
            $("#paragraph-section").css("background-color", color);
        }
    });

    $("#bold").change(function() {
        if ($("#bold").is(":checked")) {
            $("#paragraph-section").children("p").each(function() {
                $(this).addClass("p-bold");
            });
        }
        else {
            $("#paragraph-section").children("p").each(function() {
                $(this).removeClass("p-bold");
            });
        }
    });

    $("#italic").change(function() {
        if ($("#italic").is(":checked")) {
            $("#paragraph-section").children("p").each(function() {
                $(this).addClass("p-italic");
            });
        }
        else {
            $("#paragraph-section").children("p").each(function() {
                $(this).removeClass("p-italic");
            });
        }
    });

    $("#underline").change(function() {
        if ($("#underline").is(":checked")) {
            $("#paragraph-section").children("p").each(function() {
                $(this).addClass("p-underline");
            });
        }
        else {
            $("#paragraph-section").children("p").each(function() {
                $(this).removeClass("p-underline");
            });
        }
    });

    $("#font-size").change(function() {
        const fontSize = $("#font-size").val();
        if (fontSize !== "") {
            $("#paragraph-section").children("p").each(function() {
                $(this).css("font-size", fontSize);
            });
        }
    });
});