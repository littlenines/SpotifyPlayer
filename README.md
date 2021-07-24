# SpotifyPlayer
<br>
A music player that is based on how spotify looks , the main part is JS which was used to learn how to work with audio <br><br>

1. Select all elements from HTML
```
Define globally used values
Create audio element for the player
```
2. List with tracks info , image and song path

3. Load the track

```
Clear the prev songs seek timer
Reset values
Load a new track
Update details
Update slider
Ended event when track finishes in order to move to next one
Apply random bg color
```
4. Configure player controls
```
Switch between play and pause
Play/Pause loaded track and replace the icon
Go back to the first track or previous track and load and play while doing that
```
5. Configuring seek slider
> Need to calculate time and duration
```
Calculate the seek position by the % of the seek slider and get relative duration to the track
Set the current track position to the calculated seek position
```
> Seek Updater
```
Check if the current track duration is a number
Calculate the time left and total duration
Add zero to the single digit time values
Display updated duration
```
## If the volume was added it would look like this
> music.volume = seekSlider.value /100;
