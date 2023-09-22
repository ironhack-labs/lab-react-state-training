![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React State Training

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Use the `useState` hook to create state variables and add state to React components.
  - Use state variable setter functions to update state and trigger component re-render.
  - Create event handler functions to handle user interactions and browser events.

  <br>
  <hr> 

</details>

## Introduction

In this exercise, you will practice working with the state and responding to events in React. The state is a crucial part of React as it enables you to store data within your components. 

You will use the `useState` hook to create state variables, update the state, and trigger re-renders of your components by updating the state. To update the state, you will need events and handler functions that respond to browser events like clicks. This exercise is designed to help you practice both of these concepts. So, let's dive in!



<br>



## Setup

- Fork this repo
- Clone this repo

```shell
cd lab-react-props-training
npm install
npm run dev
```



## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

  

## Instructions



### Iteration 0 | Components folder

Inside of the `src/` folder, create a new folder named `components`. 

Use the `components` folder to store all the components that you create in the following iterations.



----

### Iteration 1 | `LikeButton`

Create a `LikeButton` component that has a state and displays a button with the initial text `"0 Likes"`. With each click, the number of Likes should increase.

**Example:**

```jsx
<LikeButton />
```

**Expected Output:**

<img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/08-like-button-basic.gif" alt="LikeButton component" width="280"/>



### Iteration 2 | `Counter`

Create a `Counter` component that displays the initial counter value of `0`. The component should have two buttons <kbd>+</kbd> and <kbd>-</kbd>.

- The <kbd>+</kbd> button should *increment* the counter when clicked.
- The <kbd>-</kbd> button should *decrement* the counter when clicked.

Additionally, implement a check to make sure that the counter value never goes below `0`.

**Example:**

```jsx
<Counter />
```

**Expected Output:**

![Counter component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/00-counter.gif)





----

### Iteration 3 | State: `ClickablePicture`

Create a `ClickablePicture` component that displays a picture. On each click, the picture should toggle between the two images. You can find the images in the `assets/` folder.

**Example:**

```jsx
<ClickablePicture />
```

**Expected Output:**

![ClickablePicture component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/09-clickable-pic.gif)

PS: If you want to use your picture instead, you can create it using this picture: http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png 😎



----



### Iteration 4 | State: `Dice`

Create a `Dice` component that displays a picture with the random dice value (example: `'../assets/images/dice3.png'`).

Every time the user clicks on the component, it should:

- First, display an empty picture (`'../assets/images/dice-empty.png'`)
- 1 second later, display a new random picture (example: `'../assets/images/dice6.png'`).

**Example:**

```jsx
<Dice />
```

**Expected Output before the click:**

![Dice component state 1](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/10-dice-01.png)

**Expected Output immediately after the click:**

![Dice component state 2](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/10-dice-02.png)

**Expected Output 1 second after the click:**

![Dice component state 3](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/10-dice-03.png)



----

### Bonus: Iteration 5 | `DiscoButton`

In this iteration, you will continue building on the `LikeButton` component created in the previous iteration.

Create a `DiscoButton` component that displays a button with the initial text `"0 Likes"`. Same as with the `LikeButton` component created earlier, with each click, the number of Likes should increase.



Additionally, the background color of the button should change with each click. You can use the following array of colors: `["purple", "blue", "green", "yellow", "orange", "red"]`

**Example:**

```jsx
<DiscoButton />
```

**Expected Output:**

![DiscoLikeButton component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/08-like-button.gif)





----

### Bonus: Iteration 6 | `Carousel`

Create a `Carousel` component that displays an image and two buttons (<kbd>Left</kbd> and <kbd>Right</kbd>), which change the picture on each click, respectively.

The component should take 1 prop:

- `images`: An array of strings. Each string should be an image URL.

**Example:**

```jsx
<Carousel
  images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}
/>
```



**Expected Output:**

![Carousel component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/react-training/11-carousel.gif)



----



Happy coding! :blue_heart:
