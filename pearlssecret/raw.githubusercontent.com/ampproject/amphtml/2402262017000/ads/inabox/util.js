/**
 * Executes a "restricted" read/write vsync cycle.
 * This function exists mainly since the vsync service is not available for the
 * inabox host script.
 * It also helps with maintainability. Since the passed tasks have to define
 * measure and mutate callbacks, it makes it harder for the calling code to be
 * changed in a way that screws up the read-write order.
 * Please note that this is NOT real vsync. Concurrent reads and writes ARE NOT
 * BATCHED. This means that using this can still cause layout thrashing if it's
 * being called more than once within the same frame. Use with caution.
 * @param {!Window} win
 * @param {{measure: (Function|undefined), mutate: (Function|undefined)}} task
 * @param {!Object=} opt_state
 * @visibleForTesting
 * TODO(alanorozco): Figure out a longer-term solution
 */
export function restrictedVsync(win, task, opt_state) {
    win.requestAnimationFrame(() => {
        if (task.measure) {
            task.measure(opt_state);
        }
        if (task.mutate) {
            task.mutate(opt_state);
        }
    });
}

/**
 * Executes a function after a certain time.
 * The timer service is not available for the inabox host script, hence this
 * function.
 * Not using setTimeout directly allows us to execute the callback directly on
 * tests.
 * @param {!Function} callback
 * @param {number} timeMs
 * @visibleForTesting
 */
export function timer(callback, timeMs) {
    setTimeout(callback, timeMs);
}