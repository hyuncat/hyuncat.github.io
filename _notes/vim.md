---
title: "Vim"
layout: single
collection: notes
toc: true
tags:
    - vim
---
A noncomprehensive compilation of my most frequently used commands in Vim.

Cursor Movement
---
**Basic Movement**
- `h` - Left
- `l` - Right
- `k` - Up
- `j` - Down

**Word movement**
- `w` - Go to beginning of next word
- `e` - Go to end of current/next word
- `B` - Go back to beginning of last word

**Line movement**
- `0` - Go to beginning of line
- `$` - Go to end of line

**Page movement**
- `h` - Move cursor to top of page
- `m` - Move cursor to middle of page
-`L` - Move cursor to bottom (low) of page

- `g` - jump to end of file
- `gg` - Jump to beginning of file

- **`}`** - jump to next paragraph (or function/block, when editing code)
- **`{`** - jump to previous paragraph (or function/block, when editing code)

**Ctrl+[key] movement**
- `Ctrl+e` - move screen down one line (without moving cursor)
- `Ctrl+y` - move screen up one line (without moving cursor)
- `Ctrl+b` - move screen up one page (cursor to last line)
- `Ctrl+f` - move screen down one page (cursor to first line)
- `Ctrl+d` - move cursor and screen down 1/2 page
- `Ctrl+u` - move cursor and screen up 1/2 page

Text editing
---
**Insert text**
- `i` - Insert mode
- `o` - Insert new line below cursor
- `O` - Insert new line before cursor
- `A` - Insert at end of current line

**Deleting words**
Note: You can enter view mode (`v` ) to highlight, delete, cut, and paste multiple lines at once
- `x` - Delete character under cursor
- `dw` - Delete word over cursor
- `.` - When used after `dw` deletes the next word as well
- `dd` - Delete entire line
- `D` - Delete from cursor to end of line

**Undo/Redo**
- `u` - Undo last change
- `2u` - Undo last two changes
- `Ctrl-r` - Redo changes

**Text replacement**
- `r` - replace a single character.
- `R` - replace more than one character, until `esc` is pressed.

- `cc` - change (replace) entire line
- `c$`/`C` - change (replace) to the end of the line
- `ciw` - change (replace) entire word
- `cw`/`ce` - change (replace) to the end of the word

**Cut and Paste**
---
**Yanking (copy)**
- `yy` - yank (copy) a line
- `2yy` - yank (copy) 2 lines
- `yw` - yank the characters of the word from the cursor position to the start of the next word
- `yiw` - yank (copy) word under the cursor
- `yaw` - yank (copy) word under the cursor and the space after or before it
- `y$`/`Y` - yank (copy) to end of line

- `d` - Cut line
- `P` - Paste before cursor
- `p` - Paste after cursor

**Selection**
- `ggVG` - Select all text in file