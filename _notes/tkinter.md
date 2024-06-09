---
title: "Tkinter"
collection: notes
layout: single
tags:
    - python
    - tkinter
---
Learned tkinter so I could make a lattice design GUI for Gang Lab.

Notes taken from article: ([Link](https://python-textbok.readthedocs.io/en/1.0/Introduction_to_GUI_Programming.html#putting-it-all-together))

## Basics
### Windows
**Window** - The container for all other GUI elements

- `tk.Tk()` - Creates an instance of Tk class, which is the window for all gui to go on top of

```python
import tkinter as tk
root = tk.Tk() # Conventionally called 'root'
```

### Widgets
**Widgets** - All other GUI elements like text boxes. labels, buttons
- Widgets must be added onto the window before they can be seen

**Adding widgets**
1. `widget.pack` - Sizes the window as small as it can be while still fully encompassing the widget
2. `widget.grid` - Creates grid structure
3. `widget.place`

```python
greeting = tk.Label(text="Hello!!!")
greeting.pack() 
```

### mainloop()
The `root.mainloop()` function listens for events (button clicks, keypresses), and blocks any code coming after it until the window is closed.

```python
root.mainloop() # Listens for events 
```

## The 🍞🧈 of Widgets 
### Label()
tk.Label
- text - the text to be displayed
- foreground (fg) - text color
- background (bg) - bg color
- width/height - size, measured in _text units_ (determined by the width and height of the char `0` in the default system font)

```python
label = tk.Label(text = "Hello!!!",
                foreground='white', 
                background='black')

moreLabel = tk.Label(text="Hello, Tkinter",
                    fg="white",
                    bg="000000",
                    width=10,
                    height=10)
```

### Button()
tk.Button
- text - text on button
- width/height - same as above
- fg/bg - text/bg colors

![[Screenshot 2024-05-23 at 12.30.27 PM.png|200]]

```python
button = tk.Button(
    text="Click me!",
    width=25,
    height=5,
    bg="blue",
    fg="yellow",
)
```

### Entry()

`tk.Entry(fg=’yellow’, bg=’blue’, width=50)`

**Supports the following methods**

- `.get()` - Retrieves user text inside
- `.delete()` - Deletes user text inside
    - String inside the entry is indexed starting from 0

```python
entry = tk.Entry(text='Name')
entry.pack()

entry.delete(0) # Deletes first letter in entry
entry.delete(2, 4) # Deletes from index 2 to 4 in entry
entry.delete(0, tk.END) # tk.END specifies end of entry
```

- `.insert()` - Inserts user text inside

### Creating widgets without variable assignment

```python
tk.Label(text="Hello, Tkinter").pack()
```

## Frames
Assign widgets to frames with `master=frame` argument

```python
frame = tk.Frame()
label = tk.Label(master=frame)
```

### Reliefs: Frame appearances
**Relief** attribute customizes border around frame, and can be the following:

- tk.FLAT - No border effect (default)
- tk.SUNKEN - Sunken effect
- tk.RAISED - raised effect
- tk.GROOVED - grooved border effect
- tk.RIDGE - ridged effect

![[Screenshot 2024-05-23 at 12.30.02 PM.png|300]]

```python
import tkinter as tk

border_effects = {
    "flat": tk.FLAT,
    "sunken": tk.SUNKEN,
    "raised": tk.RAISED,
    "groove": tk.GROOVE,
    "ridge": tk.RIDGE,
}

window = tk.Tk()

for relief_name, relief in border_effects.items():
    frame = tk.Frame(master=window, relief=relief, borderwidth=5)
    frame.pack(side=tk.LEFT)
    label = tk.Label(master=frame, text=relief_name)
    label.pack()

window.mainloop()
```

## Geometry Managers
### .grid()
- Allows row/column based indexing
- sticky=’nsew’ (north-south-east-west ‘sticky’ meaning it expands as the window is resized in all directions)

![[Screenshot 2024-05-23 at 12.29.04 PM.png|200]]

```python
import tkinter as tk

window = tk.Tk()

for i in range(3):
    for j in range(3):
        frame = tk.Frame(
            master=window,
            relief=tk.RAISED,
            borderwidth=1
        )
        frame.grid(row=i, column=j)
        label = tk.Label(master=frame, text=f"Row {i}\\nColumn {j}")
        label.pack()

window.mainloop()
```