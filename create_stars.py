
import random

def get_shadows(n):
    return ', '.join([f'{random.randint(1, 2000)}px {random.randint(1, 2000)}px #FFF' for _ in range(n)])

small = get_shadows(700)
medium = get_shadows(200)
large = get_shadows(100)

css = """
.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: """ + small + """;
  animation: animStar 50s linear infinite;
}
.stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: """ + small + """;
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: """ + medium + """;
  animation: animStar 100s linear infinite;
}
.stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: """ + medium + """;
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: """ + large + """;
  animation: animStar 150s linear infinite;
}
.stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: """ + large + """;
}

@keyframes animStar {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}
"""

with open('stars.css', 'w', encoding='utf-8') as f:
    f.write(css)
