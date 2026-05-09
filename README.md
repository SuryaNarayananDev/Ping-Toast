# PingToast 🚀

Modern, lightweight and animated toast notification library built with pure JavaScript.

PingToast provides beautiful stacked notifications with smooth animations, auto dismiss, close actions and clean developer-friendly APIs.

---

# ✨ Features

* ⚡ Lightweight
* 🎨 Beautiful modern UI
* 📦 Pure JavaScript
* 🔥 Smooth enter & exit animations
* 📍 Toast stacking system
* ⏱ Custom timeout support
* ❌ Close button support
* 🚀 Easy API
* 🧩 Reusable architecture

---

# 📸 Preview

```js
toast.success("Payment Successful 🚀")

toast.warning("Storage Almost Full ⚠️")

toast.danger("Something Went Wrong ❌")
```

---

# ⬇️ Download & Install

```bash
npm install pingtoastjs
```

---

# 📦 Installation

## NPM

```bash
npm install pingtoastjs
```

## CDN

```html
<link rel="stylesheet" href="style.css" />
<script src="index.js"></script>
```

---

# 🚀 Usage

## Success Toast

```js
toast.success()

toast.success("Payment Successful 🚀")
```

---

## Warning Toast

```js
toast.warning()

toast.warning("Low Storage ⚠️")
```

---

## Danger Toast

```js
toast.danger()

toast.danger("Something Went Wrong ❌")
```

---

## Info Toast

```js
toast.info()

toast.info("New Update Available ℹ️")
```

---

## Notify Toast

```js
toast.notify()

toast.notify("New Notification 🔔")
```

---

# ⏱ Custom Timeout

```js
toast.success("Saved Successfully", 5000)
```

---

# 🧠 Example

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./style.css">
</head>
<body>

<button onclick="toast.success('Build Completed 🚀')">
  Show Toast
</button>

<script src="./index.js"></script>

</body>
</html>
```

---

# 📁 Project Structure

```txt
pingtoast/
│
├── index.js
├── style.css
├── demo.html
└── README.md
```

---

# 🛣 Roadmap

## Current

* ✅ Stacked notifications
* ✅ Enter animations
* ✅ Exit animations
* ✅ Multiple toast types
* ✅ Close button
* ✅ Dynamic timeout

## Coming Soon

* 🚀 Promise Toasts
* 🎨 Theme System
* 📍 Multiple Positions
* 📦 React Support
* ⏸ Hover Pause
* 📊 Progress Bar
* 🌙 Dark / Light Mode

---

# 💡 Why PingToast?

PingToast focuses on:

* Clean developer experience
* Modern UI design
* Smooth animations
* Lightweight architecture
* Simple API structure

Built for developers who want beautiful notifications without unnecessary complexity.

---

# 👨‍💻 Author

Built by Stark ⚡

---

# 📜 License

MIT License
