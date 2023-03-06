for FILE in *; do 
  name=`echo "$FILE" | cut -d'.' -f1`;
  ext=`echo "$FILE" | cut -d'.' -f2`;
  check=`echo "$FILE" | cut -d'.' -f3`;


  # command for generating webp files from png/jpg/jpeg
  if [[ $ext == 'png' ]] || [[ $ext == 'jpg' ]] || [[ $ext == 'jpeg' ]]
  then
    echo "${name}.${ext} being webpified";
    cwebp -q 75 "${name}.${ext}" -o "${name}.webp"
  fi
done


cwebp -q 75 "dss-icon.png" -o "dss-icon.webp" &&cwebp -q 75 "lighthouse-icon.png" -o "lighthouse-icon.webp" &&cwebp -q 75 "junglo-icon.png" -o "junglo-icon.webp" &&cwebp -q 75 "john-icon.jpeg" -o "john-icon.webp"
