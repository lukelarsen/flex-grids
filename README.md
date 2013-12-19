# Flex Grids

Flex Grids is a css grid system build with flex-box. It is built with sass and follows a BEM naming convention.

- Exclude chunks of the grid system that aren't getting used
- Adjust gutter widths to support multiple grids with different gutter sizes
- Set widths of an entire section of cells at once and let them wrap if needed
- Set the width of a single cell and have everything adjust around it
- Align the cell items to top, bottom, or middle
- Nest grid items
- Set different options for mobile devices

The base of the grid is a div with a class of .grid and a child div with the class of .grid__item. All the other elements and modifiers get added on to those divs.

### Excluding part of the grid that aren't being used

If you don't need to align grid items to the bottom of cells we don't have to include the css for that. If you do need it later on we just have to variable value from false to true and you're ready to go. These variables are at the top of the file.

### Gutter Widths

On the .grid div we add one of these classes to set the gutter size for that entire grid block.

- .gutter-small
- .gutter-medium
- .gutter-large
- .gutter-xlarge

When none of these classes are added the .grid__item divs will have no space between them.

### Grid Block Width

On the .grid div we add one of these classes to set the width of all child .grid__item divs.

- .grid--fit
- .grid--full
- .grid--halves
- .grid--thirds
- .grid--quarters
- .grid--fifths

When none of these classes are added the .grid__item divs will expand and contract to fill a row. When one of these classes is added the blocks will wrap when needed.

### Set width of a single cell

On the .grid__item div add one of these classes to set a separate width.

- .grid__item--full
- .grid__item--half
- .grid__item--third
- .grid__item--quarter
- .grid__item--fifth

### Alignment of cells

If you'd like to set the alignment of all the cells in a .grid add one of these classes to .grid.

- .grid--top
- .grid--bottom
- .grid--center

If you want to set an alignment to just a single cell add one of these to .grid__item.

- .grid__item--top
- .grid__item--center
- .grid__item--bottom

### Nesting

We can nest just by repeating the .grid > .grid__item pattern. Within a .grid__item place another .grid and then more .grid__item divs and all the same rules apply.

### Responsive Devices

When we enable different behaviour on different devices we need to put more classes on our divs. You can pretty much add all the same classes we've talked about but this time you add a --palm to the class name. Here is an example:

    <div class="grid  grid--thirds  grid--palm-full  gutters-small">
        <div class="grid__item">
            ...
        </div>
    </div>


This setup would have .grid__item divs all one third the width of the page but on palm devices would be full width.

You can set the break points to be whatever you'd like. You may also name then whatever you'd like as well. See the breakpoints and breakpoint-had-widths variables for that.

### Example HTML

    <div class="grid  grid--palm-full  gutters-large  gutters--palm-small  grid--flex-cells">
        <div class="grid__item  grid__item--half">
            <div class="grid  grid--halves  grid--palm-full  gutters-small">
                <div class="grid__item">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias, assumenda dicta hic ipsum iure molestiae odit placeat provident quaerat, reprehenderit similique tenetur? Accusantium beatae debitis facilis quidem voluptatibus!
                </div>
                <div class="grid__item">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam atque beatae cumque dolores et harum modi, non, optio placeat quidem recusandae reiciendis repellat veritatis? Eligendi facilis illum mollitia!
                </div>
                <div class="grid__item">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi esse et quidem ullam. Aliquam assumenda at cum, ea iusto magni modi odit, perspiciatis quibusdam quis soluta tempora ullam velit veniam.
                </div>
            </div>
        </div>
        <div class="grid__item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur cum dignissimos dolores eos et eveniet fugiat harum ipsum, laboriosam non obcaecati perferendis quibusdam quisquam saepe sunt vero. Tempore?
        </div>
        <div class="grid__item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem beatae delectus dolorem doloremque ea eligendi eos iste iusto minima molestias, nulla qui quidem rerum tempora tempore ut vitae voluptas.
        </div>
    </div>

### A note on prefixing

I highly recommend <a target="_blank" href="https://github.com/ai/autoprefixer">auto-prefixer</a> to add all the browser prefixes for this. By default I have included the non prefixed version.
