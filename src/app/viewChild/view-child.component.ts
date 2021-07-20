import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'view-child-demo',
    template: '<p>{{message}}</p>'
})
export class ViewChildComponent implements OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 11;

    ngOnDestroy() { this.clearTimer(); }

    start() { this.countDown(); }
    stop()  {
        this.clearTimer();
        this.message = `${this.seconds} seconds`;
    }

    private clearTimer() { clearInterval(this.intervalId); }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; } // reset
                this.message = `${this.seconds} seconds`;
            }
        }, 1000);
    }
}