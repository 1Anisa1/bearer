package tmpfile

import (
	"errors"
	"io/ioutil"

	"github.com/rs/zerolog/log"
)

var ErrCreateFailed = errors.New("failed to create file")

func Create(tmpDir string, ext string) string {
	ouputFile, err := ioutil.TempFile(tmpDir, "*"+ext)
	if err != nil {
		log.Fatal().Msgf("got create fail error %e %e", err, ErrCreateFailed)
	}
	ouputFile.Close()

	return ouputFile.Name()
}